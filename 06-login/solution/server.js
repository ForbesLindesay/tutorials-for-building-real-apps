'use strict';

var express = require('express');
var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var cookieSession = require('cookie-session');
var secrets = require('./secrets');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GitHubStrategy({
    clientID: secrets.GITHUB_CLIENT_ID,
    clientSecret: secrets.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));




var app = express();

app.use(cookieSession({
  keys: secrets.keys
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res){
  if (req.isAuthenticated()) {
    res.send(req.user.username);
  } else {
    res.send('<a href="/auth/github">login</a>');
  }
});

app.get(
  '/auth/github',
  passport.authenticate('github', {
    scope: [ 'user:email' ]
  })
);

// GET /auth/github/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function will be called,
//   which, in this example, will redirect the user to the home page.
app.get(
  '/auth/github/callback',
  passport.authenticate('github'),
  function(req, res) {
    res.redirect('/');
  }
);

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3000);
