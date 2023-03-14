var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/user', function(req, res, next) {
  res.render('user');
});

router.get('/addquiz', function(req, res, next) {
  res.render('addquiz');
});
router.get('/stats', function(req, res, next) {
  res.render('stats');
});

module.exports = router;
