const reverseString = function(string) {
    const letters = [];
    let new_string = "";
    length = string.length;

    for (let i = 0; i < length; i++) {
        letters[i] = string[length - i - 1];
    }
    for (let i = 0; i < length; i++) {
        new_string += letters[i];
    }
    return new_string;
};

// Do not edit below this line
module.exports = reverseString;
