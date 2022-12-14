const express = require('express');
var sql = require('mysql');
require('dotenv').config()

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


const getUserExpend = (req, res) => {
    query = "(Select Total,u.FirstName,u.LastName from orders Natural Join user u Where Total =(Select Max(Total) from orders) And u.LastName Like " + '"A%"' + ") union (Select Total,u.FirstName,u.LastName from orders Natural Join user u where Total =(Select Min(Total) From orders) and u.LastName Like 'A%') order by Total Desc"
    try {
        con.query(query, (err, result) => {
            if (err) {
                //console.log(err)
                res.send(err.sqlMessage)
                // throw "Exception"

            }
            else {
                var orders = []
                result.forEach(order => {
                    orders.push({
                        "total": order.Total,
                        "firstName": order.FirstName,
                        "lastName": order.LastName
                        // "resturant": order.VendorName
                    })
                });

            }
            res.send(orders)
        });
    } catch (error) {

        res.send(error)
    }

}




const getfewerOrders = (req, res) => {
    query = "Select Count(*) as freq, Item From orders Natural JOIN vendor group by Item Having freq <= (SELECT AVG(temp.num_count) from (Select count(*) as num_count from orders group by Item) as temp) order by Item"

    try {
        con.query(query, (err, result) => {
            if (err) {
                //console.log(err)
                res.send(err.sqlMessage)
                // throw "Exception"

            }
            else {
                var orders = []
                result.forEach(order => {
                    orders.push({
                        "freq": order.freq,
                        "item": order.Item,
                        // "resturant": order.VendorName
                    })
                });

            }
            res.send(orders)
        });
    } catch (error) {

        res.send(error)
    }

}

const getuserOrders = (req, res) => {

    var id = req.query.id
    var query = 'Select VendorId,Item,OrderDate,Total from orders where UserId=' + id
    orders = []
    con.query(query, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            if (result.length == 0) {
                res.send("No order made")
            }
            else {
                var i = 0
                result.forEach((vid) => {
                    var q = 'Select VendorName from vendor where VendorId=' + vid.VendorId
                    con.query(q, (error, res2) => {
                        if (error) {
                            console.log(error)
                        }
                        else {
                            orders.push({
                                "vendorName": res2[0].VendorName,
                                "item": vid.Item,
                                "orderDate": vid.OrderDate,
                                "total": vid.Total
                            })
                            i = i + 1
                            if (i == result.length) {
                                res.send(orders)
                            }
                        }
                    })
                })
            }
            console.log(result)
        }
    })
}

module.exports = { getfewerOrders, getUserExpend, getuserOrders }