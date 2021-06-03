var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log(new Date(), " Requete backend");
    next();
});

router.get('/', function(req, res) {
    res.send('Le backend fonctionne bien !');
});


router.get('/list', function(req, res) {
    var fs = require('fs');
    res.json(require("../database.json"));
});

module.exports = router;