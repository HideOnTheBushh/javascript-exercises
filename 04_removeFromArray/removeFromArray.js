const removeFromArray = function() {
    const array = arguments[0];
    const new_array = [];
  
    outer: for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (array[i] === arguments[j]) {
                continue outer;
            }   
        }
        new_array.push(array[i]);
    }

    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
