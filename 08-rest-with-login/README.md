# Rest with Login

Our shared list app may be useful, but currently there's only one list for the entire world.  Lets work on adding some security to this app.

## Part 1

For step 1, combine the code from challenge 8 and challenge 6 so that Users initially see a link, asking them to log in.  Once they have logged in, show them the list as before.

For our two API methods (GET /items and PUT /items/create) you should still check the user is logged in, but if they are not logged in you should just use `res.sendStatus(403)` to indicate to the browser that they don't have permission to view the list.  403 means "Forbidden".  You can find a complete list of status codes at https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

## Part 2

Since anyone can get an account on GitHub, we don't really have anything all that useful yet.  Lets try giving each user their own private list.  To do this, instead of:

```js
var items = [];
```

on the server, do:

```js
var items = {};
```

then rather than

```js
res.json(items);
```

do

```js
res.json(items[req.user.id] || []);
```

And finally instead of:

```js
items.push(someItem);
```

do

```js
if (!items[req.user.id]) items[req.user.id] = [];
items[req.user.id].push(someItem);
```

You shouldn't need to modify the client at all.