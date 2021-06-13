const express = require("express");
var history = require('connect-history-api-fallback'); //https://github.com/bripkens/connect-history-api-fallback
var cors = require('cors');


var backend = require('./app/backend');

const path = __dirname + '/../';

const app = express();

const staticFileMiddleware = express.static(path);

app.use(cors());
app.use('/backend', backend);

app.use(staticFileMiddleware);
app.use(history({
    verbose: true
}));

app.use(staticFileMiddleware);


app.get('/', function(req, res) {
    res.render(path + "index.html");
});




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});



//maintenant les choses serieuses
const path_to_articles = "../Ressources/Articles";

var CronJob = require('cron').CronJob;
var fs = require('fs');
var xml2js = require('xml2js');

var job = new CronJob('0 */1 * * * *', f_updateDB, null, true, 'Europe/Paris', undefined, true);
job.start();



function f_updateDB() {
    console.log("=> update db");
    let new_db = {};
    new_db.articles = [];

    fs.readdirSync(path_to_articles).forEach(folder => {
        let path = path_to_articles + "/" + folder;

        try {
            if (fs.statSync(path).isDirectory()) {
                let new_folder = {};
                //console.log(file);
                let stats = fs.statSync(path);
                //console.log(stats);
                new_folder.name = folder;
                new_folder.birthtime = stats.birthtime;
                new_folder.url = path_to_articles + "/" + folder;
                new_folder.preview = {};

                let html = fs.readFileSync(new_folder.url + "/index.html", 'utf8');

                try {
                    let parser = new xml2js.Parser();
                    parser.parseString(html, function(err, result) {
                        console.log("======ERREUR============>", err);
                        //console.log(result.html.head[0].meta);

                        new_folder.preview = {
                            titre: result.html.head[0].title[0],
                        };

                        result.html.head[0].meta.forEach(element => {
                            console.log(element);
                            if (element.$.name == "author") new_folder.preview.auteur = element.$.content;
                            if (element.$.name == "description") new_folder.preview.description = element.$.content;
                            if (element.$.name == "image_titre") new_folder.preview.url_img = element.$.src;
                        });

                    });
                } catch (e) {
                    console.log(e);
                }

                console.log(new_folder.preview);
                new_db.articles.push(new_folder);
            }
        } catch (err) {
            console.error(err);
        }
    });
    //trier par date


    console.log(new_db);
    console.log("=====");

    //trie des objets par date:
    new_db.articles = new_db.articles.sort(function(a,b){
        return new Date(b.birthtime) - new Date(a.birthtime);
    });

    // stringify JSON Object
    var jsonContent = JSON.stringify(new_db);

    fs.writeFile("database.json", jsonContent, 'utf8', function(err) {
        if (err) {
            console.log("Erreur ecriture database json");
            return console.log(err);
        }
    });
}