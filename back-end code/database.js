var sql = require('mysql');

// const Connection = require('mysql/lib/Connection');
const con = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'db'
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

// con.query("INSERT INTO Coupon (CouponId, DiscountPercentage, IsActive, UserId, VendorId)  VALUES (9635270034,22,'1',62631888,63174877);", (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result)

// });

con.query("Select * from Coupon where CouponId=9635270034", (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result)

});

