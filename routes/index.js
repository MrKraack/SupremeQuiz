const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login')

/* GET home page. */
router.get('/', connectEnsureLogin.ensureLoggedIn, function(req, res, next) {
  res.render('index');
});

router.get('/user', connectEnsureLogin.ensureLoggedIn, function(req, res, next) {
  res.render('user');
});

router.get('/addquiz', connectEnsureLogin.ensureLoggedIn, function(req, res, next) {
  res.render('addquiz');
});
router.get('/stats', connectEnsureLogin.ensureLoggedIn, function(req, res, next) {
  res.render('stats');
});

module.exports = router;
