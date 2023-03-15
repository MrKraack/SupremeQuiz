const express = require('express')
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login')

const userCreateRoutePassport = require('./user/createUserPassport')
const userDeleteRoute = require('./user/deleteUser')
const userUpdateRoute = require('./user/updateUser')

// const quizLoadRoute = require('./quiz/loadQuiz')

const quizCreateRoute = require('./quiz/createQuiz')

const quizDeleteRoute = require('./quiz/deleteQuiz')

const router = express.Router()



//Auth routes
router.post(
    '/loginUser',
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/user',
    })
);

router.post('/logout', function(req, res, next){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.get('/signup', function(req, res, next) {
    res.render('signup');
});

//User routes
router.post('/register', userCreateRoutePassport)
// router.post('/loginUser', userLoginRoutePassport)
router.put('/updateUser/:id', userUpdateRoute)
router.delete('/deleteUser/:id', userDeleteRoute)

//Website protected routes
router.get('/', connectEnsureLogin.ensureLoggedIn(), function(req, res, next) {
    res.render('index');
});
router.get('/user', connectEnsureLogin.ensureLoggedIn(), function(req, res, next) {
    res.render('user');
});
router.get('/addquiz', connectEnsureLogin.ensureLoggedIn(), function(req, res, next) {
    res.render('addquiz');
});
router.get('/stats', connectEnsureLogin.ensureLoggedIn(), function(req, res, next) {
    res.render('stats');
});

//quiz routes
// router.get('/loadQuiz', quizLoadRoute)
router.post('/createQuiz', quizCreateRoute)
router.delete('/deleteQuiz/:id', quizDeleteRoute)

module.exports = router