const express = require('express')
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login')

const userCreateRoute = require('./user/createUser')
const userLoginRoute = require('./user/loginUser')
const userDeleteRoute = require('./user/deleteUser')
const userUpdateRoute = require('./user/updateUser')

const quizLoadRoute = require('./quiz/loadQuiz')

const quizCreateRoute = require('./quiz/createQuiz')

const quizDeleteRoute = require('./quiz/deleteQuiz')

const router = express.Router()



//Auth routes
router.post(
    '/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/',
    })
);

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.get('/signup', function(req, res, next) {
    res.render('signup');
});

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

//User routes
router.post('/register', userCreateRoute)
router.post('/loginUser', passport.authenticate('local', { failureRedirect: '/' }, userLoginRoute))
router.put('/updateUser/:id', userUpdateRoute)
router.delete('/deleteUser/:id', userDeleteRoute)


//quiz routes
// router.get('/loadQuiz', quizLoadRoute)
// router.post('/loginUser', quizCreateRoute)
// router.post('/deleteQuiz', quizDeleteRoute)

module.exports = router