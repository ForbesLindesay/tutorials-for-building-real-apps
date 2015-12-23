'use strict';

var mongo = require('then-mongo');
var secrets = require('./secrets');

var db = mongo(secrets.MONGO_DB_CONNECTION, ['items']);

// db.update(query, operation, options)
db.items.update(
  // find the item with "id" "count"
  {
    _id: 'count'
  },
  // increment the "count" property by 1
  {
    $inc: { 'count': 1}
  }, {
  upsert: true
}).then(function () {
  return db.items.findOne({_id: 'count'});
}).done(function (item) {
  console.dir(item, {depth: 10, colors: true});
  db.close();
});
