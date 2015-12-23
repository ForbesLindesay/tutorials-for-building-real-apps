'use strict';

var mongo = require('then-mongo');
var secrets = require('./secrets');

var db = mongo(secrets.MONGO_DB_CONNECTION, ['items']);

// db.update(query, operation, options)
db.items.findOne(
  // find the item with "id" "value"
  {
    _id: 'value'
  }
).done(function (value) {
  console.log(value.str);
  // close the connection to the database
  db.close();
});
