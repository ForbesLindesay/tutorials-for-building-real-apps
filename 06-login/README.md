# Login

It's time to build our first server-side app. You're going to build a very simple server application that lets a user sign in via GitHub and then displays their username.

## Part 1: Basic Server

Create a file called `server.js` with the following code in it:

```js
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
```

When you run it via `node server.js`, it will create a server listening on port `3000` which you can access from a web browser via `http://localhost:3000`.  Try playing with the `'hello world'` string, what happens if you put html in there?

`app.get('/', ...)` is registering a handler for the `/` route.  Try creating another route handler so that navigating to `http://localhost:3000/foo` returns `'bar'`


## Part 2: View Counter

This server is stateless.  i.e. every time we make a request it will generate the response from scratch, with no awareness of any previous requests.  In order to implement login, we will need it to remember who we are.  To do this, we use a "session".  Use [cookie-session](https://www.npmjs.com/package/cookie-session) to return the number of times that the current user has requested the current page.

Notice how if you open a different browser (or an incognito window) you get a separate session, and thus a separate count.

## Part 3: GitHub Login

Use [passport-github2](https://github.com/cfsghost/passport-github) to implement login via GitHub.  You'll need to go to https://github.com/settings/developers to register a new application and make a note of your `GITHUB_CLINET_ID` and `GITHUB_CLIENT_SECRET`.  **Never** commit these into GitHub.  You can create a separate file that you add to `.gitignore` file to prevent it being committed:

.gitignore:

```
/secrets.js
```

secrets.js

```js
module.exports = {
  GITHUB_CLIENT_ID: '...',
  GITHUB_CLIENT_SECRET: '...'
};
```

Then load them in via `require`.

To implement the app, see if you can adapt [the example](https://github.com/cfsghost/passport-github/blob/master/examples/login/app.js) but note that you should only need `express`, `passport`, `passport-github2`, `cookie-session` (instead of `express-session`) and `GitHubStrategy`.  The rest of those modules are not required.

When `http://localhost:3000/` is requested, you should test if the user is currently authenticated.  If they are, return their username (from `req.user.username`).  If they are not, render a link to `http://localhost:3000/auth/github`.