const express = require("express");
var history = require('connect-history-api-fallback'); //https://github.com/bripkens/connect-history-api-fallback
var cors = require('cors')


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
const path_to_articles = __dirname + "/../Articles";

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
                        console.log(result.html.head[0]);
                        console.log('Done');
                        new_folder.preview = {
                            titre: result.html.head[0].title[0],
                            description: result.html.head[0].description[0],
                            url_img: result.html.head[0].image_titre[0]
                        };
                    });
                } catch (e) {
                    console.log(e);
                }


                new_db.articles.push(new_folder);
            }
        } catch (err) {
            console.error(err);
        }
    });
    //trier par date


    console.log(new_db);
    console.log("=====");

    // stringify JSON Object
    var jsonContent = JSON.stringify(new_db);

    fs.writeFile("database.json", jsonContent, 'utf8', function(err) {
        if (err) {
            console.log("Erreur ecriture database json");
            return console.log(err);
        }
    });
}