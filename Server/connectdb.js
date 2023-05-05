const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

/*const connection = mysql.createPool({
  host     : 'localhost', // Your connection adress (localhost).
  user     : 'root',     // Your database's username.
  password : '',        // Your database's password.
  database : 'bikemanager'   // Your database's name.
});*/

const Database = require('./database');
const database = new Database().getInstance()
const connection = database.getConnection

// Starting our app.
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/products', (req, res) => {
  const customer_id = req.body.customer_id;
  const bike_id = req.body.bike_id;
  const total_time = req.body.total_time + ':00:00.000000';
  const revenue = req.body.revenue;
  console.log('Server Receive: ' + customer_id + ' ' + bike_id + ' ' + total_time + ' ' + revenue)

  connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    let sql = "INSERT INTO `hire` (`customer_id`, `bike_id`, `end_time`, `total_time`) VALUES ('" + customer_id + "', '" + bike_id + "', DATE_ADD(NOW(), INTERVAL " + req.body.total_time + " HOUR) , '" + total_time + "');";
    console.log(sql);
    connection.query(sql, function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) {
        console.log('Insert Fail');
      } else {
        console.log('Insert Success');
        res.send({
          'customer_id': customer_id,
          'bike_id': bike_id,
          'total_time': total_time,
          'revenue': revenue,
        });
      }      
    });
  });
});


// Starting our server.
/*app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});*/

module.exports = app;