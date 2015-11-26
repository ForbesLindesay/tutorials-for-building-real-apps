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
