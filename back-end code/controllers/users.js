const express = require('express');
var sql = require('mysql');

const con = sql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

const getFirstName = (req, res) => {
    var id = req.body.id
    var query = 'Select FirstName from user where UserId=' + id
    //var q = 'select * from userauthentication'
    con.query(query, (err, result) => {
        console.log(query)
        if (err) {
            res.send(err)
        }
        else {

            res.send(result[0].FirstName)
        }
    })
}

module.exports = { getFirstName }