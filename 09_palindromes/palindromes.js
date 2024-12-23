const palindromes = function (str) {
    // Convert into lower case
    let old = str.toLowerCase();
    // Convert into array of letters only
    old = old
            .split("")
            .filter(letter => isAlphanumeric(letter))
            .join("");
    // Check whether same as reversed version
    return old === old.split("").reverse().join("");
};

function isAlphanumeric(symbol) {
    // Check if the symbol is a single character and is alphanumeric (letters or digits)
    return /^[a-zA-Z0-9]$/.test(symbol);
}


// Do not edit below this line
module.exports = palindromes;
