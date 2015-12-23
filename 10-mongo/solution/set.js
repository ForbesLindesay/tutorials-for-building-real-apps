'use strict';

var mongo = require('then-mongo');
var secrets = require('./secrets');

var db = mongo(secrets.MONGO_DB_CONNECTION, ['items']);

// db.update(query, operation, options)
db.items.update(
  // find the item with "id" "value"
  {
    _id: 'value'
  },
  // set the "str" property to the value from the arguments
  {
    $set: { 'str': process.argv[2]}
  },
  // if the item doesn't already exist, create it
  {
    upsert: true
  }
).done(function () {
  // close the connection to the database
  db.close();
});
