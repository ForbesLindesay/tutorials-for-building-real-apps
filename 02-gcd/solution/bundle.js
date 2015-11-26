(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var gcd = require('gcd');

var inputA = document.getElementById('number-input-a');
var inputB = document.getElementById('number-input-b');
var output = document.getElementById('output');

document.getElementById('add').addEventListener('click', function () {
  output.textContent = parseFloat(inputA.value) + parseFloat(inputB.value);
});
document.getElementById('minus').addEventListener('click', function () {
  output.textContent = parseFloat(inputA.value) - parseFloat(inputB.value);
});
document.getElementById('multiply').addEventListener('click', function () {
  output.textContent = parseFloat(inputA.value) * parseFloat(inputB.value);
});
document.getElementById('divide').addEventListener('click', function () {
  output.textContent = parseFloat(inputA.value) / parseFloat(inputB.value);
});
document.getElementById('gcd').addEventListener('click', function () {
  output.textContent = gcd(
    parseInt(inputA.value, 10),
    parseInt(inputB.value, 10)
  );
});

},{"gcd":2}],2:[function(require,module,exports){
module.exports = function gcd (a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
};

},{}]},{},[1]);
