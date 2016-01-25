# Mongo 2

In the last tutorial you saw how to store and retrieve a value in mongodb.  For this tutorial, we're going to use that knowledge to make the items in our lists for our rest app persist across restarts.

## 1. Inserting items

You can use `db.items.insert({userID: someUserID, value: 'some string'})` to insert items into the mongodb collection.  Including the userID that created the item will make it easy to query.  This method returns a `Promise`.

## 2. Querying Items

You can query the items by doing `db.items.find({userID: someUserID})`.  This returns a promise for an array.

## 3. Deleting

Once you have that working, and persisting the lists between server restarts, try adding a button next to each item to remove it from the list.
