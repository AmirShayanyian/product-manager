const { MongoClient } = require('mongodb');

class ConnectToMongo {
  #DB_URL = 'mongodb://localhost:27017/test-db';
  #db = null;
  async #connect() {
    try {
      let client = new MongoClient(this.#DB_URL);
      let db = client.db();
      return db;
    } catch (error) {
      console.log('error: ', error.message);
    }
  }

  async Get() {
    try {
      if (this.#db) {
        console.log('DataBase connection already exist.');
        return this.#db;
      }
      this.#db = await this.#connect();
      return this.#db;
    } catch (error) {
      console.log('error: ', error.message);
    }
  }
}
module.exports = ConnectToMongo;
