# Greatest Common Divisor

That basic calculator works fine, but what if we wanted to do some more complex maths.  Lets build an app for computing the greatest common divisor of two numbers.

![Example Image](example.png)

[Live Example](https://rawgit.com/ForbesLindesay/tutorials-for-building-real-apps/master/02-gcd/sollution/index.html)

JavaScript has no built in function for getting the greatest common divisor of two numbers, but implementing one is just a case of looking up euclids algorithm, which results in the code:

```js
function gcd (a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
```

We might not want to write and test that code though, and (thanks to npm) we don't have to.


Step one is to download and install the latest version of node.js from their website: https://nodejs.org

Next, install the [gcd](https://www.npmjs.com/package/gcd) module and take a look in the "node_modules" folder it creates.  You can run a JavaScript file in node.js from the command line/terminal by typing `node filename.js`.  Try doing this with the example.

Now you have this working in node.js, we need to get it working in the browser.  To do this, install http://browserify.org/ and run the command:

```js
browserify index.js -o bundle.js
```

This will convert `index.js` which is written for node.js to `bundle.js` which will run in the browser.  Using this technique, see if you can add a `gcd` button to our calculator by using the gcd module from npm.  Don't forget to update `index.html` to point at `bundle.js`.