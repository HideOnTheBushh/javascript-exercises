const findTheOldest = function(arr) {
    let newArr = arr.sort((a, b) => {
        let aAge;
        let bAge;
        if (a.yearOfDeath) {
            aAge = a.yearOfDeath - a.yearOfBirth;
        } else {
            aAge = new Date().getFullYear() - a.yearOfBirth;
        }
        if (b.yearOfDeath) {
            bAge = b.yearOfDeath - b.yearOfBirth;
        } else {
            bAge = new Date().getFullYear() - b.yearOfBirth;
        }
        return bAge - aAge;

    })
    return newArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
