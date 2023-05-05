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

app.get('/products', function (req, res) {
  res.send({
    "title": "The Basics - Networking",
    "description": "Your app fetched this from a remote endpoint!",
    "movies": [
      { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
      { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
      { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
      { "id": "4", "title": "Inception", "releaseYear": "2010" },
      { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
    ]  });
});

app.post('/tests', (req, res) => {
    connection.getConnection(function (err, connection) {
        // Executing the MySQL query (select all data from the 'users' table).
        let sql = "SELECT * FROM `hire`";
        console.log(sql);
        connection.query(sql, function (error, results, fields) {
          // If some error occurs, we throw an error.
          if (error) {
            console.log('Get Fail');
          } else {
            console.log('Get Success');
            res.send(results);
          }      
        });
      });
});

// Starting our server.
/*
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});*/

module.exports = app;