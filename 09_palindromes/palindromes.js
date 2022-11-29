const palindromes = function (string) {
    let regex = /[^a-zA-Z]/g;
    return string.replace(regex, '').toLowerCase() === string.replace(regex, '').toLowerCase().split('').reverse().join('');

};

// Do not edit below this line
module.exports = palindromes;
