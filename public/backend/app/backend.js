var express = require('express');
var router = express.Router();

const fs = require('fs');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log(new Date(), " Requete backend");
    next();
});

router.get('/', function(req, res) {
    res.send('Le backend fonctionne bien !');
});


router.get('/list', function(req, res) {
    res.json(require("../database.json"));
});

/*
router.get('/indexDate', function(req, res) {
    let db = require("../database.json");
});
router.get('/taille', function(req, res) {
    let db = require("../database.json");
    res.json({ taille: db.articles.length });
});
*/

module.exports = router;