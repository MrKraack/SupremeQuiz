const express = require('express')

const userCreateRoute = require('./user/createUser')
const userLoginRoute = require('./user/loginUser')
const userDeleteRoute = require('./user/deleteUser')
const userUpdateRoute = require('./user/updateUser')

const quizLoadRoute = require('./quiz/loadQuiz')

const quizCreateRoute = require('./quiz/createQuiz')

const quizDeleteRoute = require('./quiz/deleteQuiz')

const router = express.Router()

//User routes
router.post('/register', userCreateRoute)
router.post('/loginUser', userLoginRoute)
router.put('/updateUser/:id', userUpdateRoute)
router.delete('/deleteUser/:id', userDeleteRoute)


//quiz routes
router.get('/loadQuiz', quizLoadRoute)
router.post('/createQuiz', quizCreateRoute)
router.delete('/deleteQuiz/:id', quizDeleteRoute)

module.exports = router