const express = require('express')

const userCreateRoute = require('./user/createUser')
const userLoginRoute = require('./user/loginUser')

const quizLoadRoute = require('./quiz/loadQuiz')

const quizCreateRoute = require('./quiz/createQuiz')

const quizDeleteRoute = require('./quiz/deleteQuiz')

const router = express.Router()

//User routes
router.post('/register', userCreateRoute)
router.post('/loginUser', userLoginRoute)


//quiz routes
router.get('/loadQuiz', quizLoadRoute)
// router.post('/loginUser', quizCreateRoute)
// router.post('/deleteQuiz', quizDeleteRoute)

module.exports = router