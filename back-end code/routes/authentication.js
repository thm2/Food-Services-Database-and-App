const express = require('express')
const router = express.Router()
const { login, createAccount } = require('../controllers/authentication')
router.route('/login').put(login)
router.route('/signup').post(createAccount)
module.exports = router