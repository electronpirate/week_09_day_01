const MongoClient = require('mongodb').MongoClient;
ObjectID = require("mongodb").ObjectID;
const DB_NAME = "facebook";
const HOST = "mongodb://localhost:27017";

class MongoHelper {
  static create(coll, payload) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.insertOne(payload);
    });
  }
  static get(coll) {
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.find().toArray();
    })
  }
}

module.exports = MongoHelper;
