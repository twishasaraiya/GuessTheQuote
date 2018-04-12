const express = require('express')
const router = express.Router()

const User = require('../models/user')

// Middlewares - add if authentication needed before route
// const checkAuth = require('../middleware/check-auth')

const userController = require('../controllers/user')

router.post('/signup', userController.user_signup)

router.post('/login', userController.user_login)

// TODO: add additional routes for users

module.exports = router
