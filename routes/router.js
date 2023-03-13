const express = require('express')

const userCreateRoute = require('./user/createUser')

const router = express.Router()

//User routes
router.post('/register', userCreateRoute)

module.exports = router