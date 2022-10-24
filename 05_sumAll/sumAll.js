const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    if (firstNumber > secondNumber) {
        let copy = 0;
        copy = firstNumber;
        firstNumber = secondNumber;
        secondNumber = copy; 
    }

    if (firstNumber < 0 || secondNumber < 0  || typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return 'ERROR';
    }

    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
