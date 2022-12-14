const express = require('express')
const router = express.Router()
const { getFirstName } = require('../controllers/users.js')

router.route('/getFirstName').put(getFirstName)
module.exports = router 