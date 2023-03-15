const express = require('express')
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login')

const userCreateRoutePassport = require('./user/createUserPassport')
const userDeleteRoute = require('./user/deleteUser')

const quizLoadRoute = require('./quiz/loadQuiz')
const quizIdLoadRoute = require('./quiz/')

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

router.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.get('/signup', function (req, res, next) {
    res.render('signup');
});

//User routes
router.post('/register', userCreateRoutePassport)
// router.post('/loginUser', userLoginRoutePassport)
// router.put('/updateUser/:id', userUpdateRoute)
router.delete('/deleteUser/:id', userDeleteRoute)

//Website protected routes
router.get('/',  async function (req, res, next) {
    //Variable to hold quizArray
    let quizArray;
    //Fetch data from Server
    await fetch("http://localhost:3001/loadQuiz")
        .then((res) => res.json())
        .then((data) => quizArray = data)

    //Send server data with render

    res.render('index', { QuizArray: quizArray });
});

router.get('/user', connectEnsureLogin.ensureLoggedIn(), function (req, res, next) {
    res.render('user');
});
router.get('/addquiz', connectEnsureLogin.ensureLoggedIn(), function (req, res, next) {
    res.render('addquiz');
});
router.get('/stats', connectEnsureLogin.ensureLoggedIn(), function (req, res, next) {
    res.render('stats');
});

router.get("/quiz", async function(req,res) {
    await fetch("http://localhost:3001/:id")
    .then((res) => res.json())
    .then((data) => console.log(data))

    res.render("quiz")
})

//quiz routes
router.get("/quiz/:id", quizIdLoadRoute)
router.get('/loadQuiz', quizLoadRoute)
router.post('/createQuiz', quizCreateRoute)
router.delete('/deleteQuiz/:id', quizDeleteRoute)


module.exports = router