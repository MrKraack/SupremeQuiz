const express = require('express')

const userCreateRoute = require('./user/createUser')

const quizLoadRoute = require('./quiz/loadQuiz')

const quizCreateRoute = require('./quiz/createQuiz')

const quizDeleteRoute = require('./quiz/deleteQuiz')

const router = express.Router()

//User routes
router.post('/register', userCreateRoute)

//quiz routes
router.get('/loadQuiz', quizLoadRoute)
router.post('/createQuiz', quizCreateRoute)
router.delete('/deleteQuiz', quizDeleteRoute)

module.exports = router