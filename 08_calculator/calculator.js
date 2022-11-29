const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
  let sum = 0;
  if(a.length > 0) {
    for (let i = 0; i < a.length; i++) {
      sum += Number(a[i]);
    }
    return sum;
  } else {
    return 0;
  }
};

const multiply = function(a) {
  let b = 1;
  a.forEach(number => b *= number);
  return b;
};

const power = function(a,b) {
  let c = 1;
	for (i = 1; i <= b; i++) {
    c *= a;
  }
  return c;
};

const factorial = function(number) {
  let newNumber = 1;
	if(number === 0) {
    return 1;
  } else {
    for (let i = 1; i <= number; i++) {
      newNumber *= i;
    }
    return newNumber;
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
