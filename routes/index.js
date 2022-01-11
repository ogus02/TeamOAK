var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Team OAK'
    });
});

router.get('/oscar', function(req, res, next) {
    res.render('oscar', {
        title: 'Team OAK'
    });
});

router.get('/adam', function(req, res, next) {
    res.render('adam', {
        title: 'Team OAK'
    });
});

router.get('/kasiem', function(req, res, next) {
    res.render('kasiem', {
        title: 'Team OAK'
    });
});

module.exports = router;