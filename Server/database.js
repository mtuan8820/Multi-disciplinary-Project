const mysql = require('mysql');

class Database {
    constructor() {
      this.connection = mysql.createPool({
        host     : 'localhost', 
        user     : 'root',     
        password : '',        
        database : 'bikemanager'   
      });
    }
  
    get getConnection() {
      return this.connection;
    }
  }
  
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Database();
        } else {
          console.log('Database connection is already exist')
        }
    }
  
    getInstance() {
        return Singleton.instance;
    }
}

module.exports = Singleton;