const express = require('express')
const router = express.Router()
const { getfewerOrders, getUserExpend, getuserOrders } = require("../controllers/orders")

router.route('/fewerOrders').get(getfewerOrders)
router.route('/userExpend').get(getUserExpend)
router.route('/getuserOrders').get(getuserOrders)
module.exports = router