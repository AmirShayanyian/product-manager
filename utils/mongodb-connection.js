const { MongoClient } = require('mongodb');

class MongodbConnection {
  #DB_URL = 'mongodb://localhost:27017/product_manager';
  #db = null;
  async #connect() {
    try {
      const client = new MongoClient(this.#DB_URL);
      let db = client.connect();
      return db;
    } catch (error) {
      console.log('error: ', error.message);
    }
  }

  async main() {
    try {
      if (this.#db) {
        console.log('Connected to the db...');
      }
      this.#db = this.#connect();
      return this.#db;
    } catch (error) {
      console.log('error: ', error.message);
    }
  }
}
module.exports = MongodbConnection;
