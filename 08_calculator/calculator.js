const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((sum, number) => sum + number, 0);
};

const multiply = function(array) {
  return array.reduce((multiply, number) => multiply * number);
};

const power = function(number, power) {
	return number ** power
};

const factorial = function(number) {
	for(let i = 1; i <= number; i--){
    console.log(i)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
