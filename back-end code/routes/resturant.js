const express = require('express')
const router = express.Router()
const { getResturants, addResturant, updateResturant, deleteResturant, getDetails, getVendorDetails, getVendorAvgPrice } = require('../controllers/resturant.js')
router.get('/', (req, res) => {
    res.send("resturant")
})
router.route('/getResturants').get(getResturants)
router.route('/addResturant').post(addResturant)
router.route('/updateResturant').put(updateResturant)
router.route('/deleteResturant').put(deleteResturant)
router.route('/getDetails').get(getDetails)
router.route('/getVendorDetails').get(getVendorDetails)
router.route('/getAvgPrice').put(getVendorAvgPrice)
module.exports = router