const e = require('express');
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

const login = (req, res) => {
    var email = req.body.email
    var password = req.body.password
    var query = 'Select UserId,Password from userauthentication where EmailAddress=' + '"' + email + '"' + "or " + "EmailAddress=" + "'" + " " + email + " " + "'"
    //var q="Select EmailAddress,Password from userauthentication"
    console.log(query)
    con.query(query, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            console.log(result)
            if (result.length == 0) {
                res.send("No email found")
            }
            else {
                if (password == result[0].Password || " " + password + " " == result[0].Password) {

                    res.send("" + result[0].UserId)

                }
                else {
                    console.log(result[0].Password)
                    res.send('wrong password')
                }


            }

        }

    })



}

const createAccount = (req, res) => {
    var FirstName = req.body.FirstName
    var LastName = req.body.LastName
    var PhoneNumber = req.body.PhoneNumber
    var Email = req.body.Email
    var Address = req.body.Address
    var Password = req.body.Password
    var uid = Math.floor(Math.random() * 1000)

    var query1 = 'Insert into userauthentication values (' + '"' + uid + '"' + ',' + '"' + Email + '"' + ',' + '"' + Password + '"' + ')'
    console.log(query1)
    var query2 = 'Insert into user (UserId,FirstName,LastName,PhoneNumber,Address) values (' + '"' + uid + '"' + ',' + '"' + FirstName + '"' + ',' + '"' + LastName + '"' + ',' + '"' + PhoneNumber + '"' + ',' + '"' + Address + '"' + ')'
    con.query(query2, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            con.query(query1, (err, result2) => {
                if (err) {
                    res.send(err['sqlMessage'])
                }
                else {
                    res.send("User Added Successfully")
                }
            })
        }
    })
}

module.exports = { login, createAccount }