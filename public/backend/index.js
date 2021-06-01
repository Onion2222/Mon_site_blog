var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var xml2js = require('xml2js');

var server = http.createServer();


const path_to_articles = __dirname + "/../Articles";
let database = [];

f_updateDB();
setInterval(f_updateDB, 360000);

function f_updateDB() {
    console.log("=> update db");
    let new_db = [];


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

                new_db.push(new_folder);
            }
        } catch (err) {
            console.error(err);
        }
    });
    //trier par date
    new_db.sort((a, b) => b.birthtime - a.birthtime);

    database = new_db;
    console.log(database);
}



function send_erreur(response, code) {
    /*let headers = {
        'Content-Type': 'text/plain' ///html'
    };*/
    response.writeHead(200); //, headers);
    response.end("erreur " + code);
}


// listening requests from clients
server.on('request', function(request, response) {
    console.log("request !");
    let currentRoute = url.format(request.url);
    let currentVar = Object.fromEntries(new URLSearchParams(currentRoute.substr(currentRoute.indexOf("?"))));
    let currentMethod = request.method;

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');


    console.log("requete de " + currentRoute + " | methode: " + currentMethod);
    console.log(currentVar);

    if (currentMethod == "GET") {
        //var headers = {};

        if (currentVar.content == "preview" | currentVar.content == "url") {
            console.log("GET-*" + currentVar.content + "-index:" + currentVar.index);


            //recup head de l'article à index
            if (currentVar.index >= database.length) {
                send_erreur(response, 0);
                return;
            }

            let url_article = "Articles/" + database[currentVar.index].name + "/";

            if (currentVar.content == "url") {
                //headers = { 'Content-Type': 'text/plain' };
                response.writeHead(200); //, headers);
                response.end(url_article + "index.html");
            }

            if (currentVar.content == "preview") {

                fs.readFile(path_to_articles + "/" + database[currentVar.index].name + "/index.html", 'utf8', function(err, html) {

                    try {
                        let parser = new xml2js.Parser();
                        parser.parseString(html, function(err, result) {
                            /*headers = {
                                'Content-Type': 'text/html'
                            };*/
                            console.log(result.html.head[0]);
                            console.log('Done');
                            response.writeHead(200); //, headers);
                            response.end("<img src=\"" + url_article + result.html.head[0].image_titre[0] + "\"></img><h1>" + result.html.head[0].title[0] + "</h1><a>" + result.html.head[0].description[0] + "</a>");

                        });
                    } catch (e) {
                        console.log(e);
                        send_erreur(response, 2);
                    }
                });
            }



        } else {
            //erreur
            console.log("commande non reconnue");
            send_erreur(response, "commande inconnue");
        }
    }

});



server.listen(8081, function() {
    console.log('server up and running at 8081 port');
});




/*

switch (currentRoute) {
    // serving the html index to client
    case '/':
        fs.readFile(__dirname + '/index.html', function(err, data) {
            var headers = {
                'Content-Type': 'text/html'
            };

            response.writeHead(200, headers);
            response.end(data);
        });

        break;

        // handling requests from client with route /api/user
    case '/api/user':
        // if request is a POST, then the user is sending a user
        if (currentMethod === 'POST') {
            // reading the body of the request
            request.on('data', function(chunk) {
                requestBody += chunk.toString();
            });

            // once the body of the request was loaded
            request.on('end', function() {

                // saving the user sent on the request body
                userStoredInMemory = querystring.parse(requestBody);

                // responding to the user
                var headers = {
                    'Content-Type': 'text/plain'
                };
                response.writeHead(200, headers);
                response.end('User was already stored.');
            });
        }

        // if request is a GET, then the client is requesting
        // to see the user stored.
        else if (currentMethod === 'GET') {
            var headers = {
                'Content-Type': 'application/json'
            };

            response.writeHead(200, headers);
            response.end(JSON.stringify(userStoredInMemory));
        }
        break;
}


*/