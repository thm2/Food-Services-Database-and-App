const express = require('express')
const app = express()
const resturant = require('./routes/resturant.js')
const orders = require('./routes/orders.js')
const authentication = require('./routes/authentication.js')
const users = require('./routes/users.js')
const bodyParser = require('body-parser')
var cors = require('cors');




// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json())

app.use('/resturants', resturant)
app.use('/orders', orders)
app.use('/auth', authentication)
app.use('/users', users)
app.get('/', (req, res) => {
    res.send("welcome")
})
//var port = 8000
app.listen(process.env.PORT || 8000, () => {
    console.log("hosted")
})
