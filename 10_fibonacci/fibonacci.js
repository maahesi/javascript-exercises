const fibonacci = function(number) {
    if (number < 0) {
        return 'OOPS';
    }
    let firstNumber = 0,
        secondNumber = 1,
        sum = 0;

    for (let i = 1; i <= number; i++) {
        sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;
    }
    return firstNumber;
};

// Do not edit below this line
module.exports = fibonacci;
