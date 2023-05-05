var Database = require('./database');
var Mainserver = require('./connectdb');
var Testserver = require('./servertest');

const database = new Database().getInstance()

Testserver.listen(3001, () => {
    console.log('Go to http://localhost:3001/users so you can see the data.');
});

Mainserver.listen(3002, () => {
    console.log('Go to http://localhost:3002/users so you can see the data.');
});
