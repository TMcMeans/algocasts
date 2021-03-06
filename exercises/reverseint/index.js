// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = n.toString().split('').reverse().join('')

    if (n < 0) {
        return parseInt(reversed) * -1
    } 

    return parseInt(reversed)
}

//Math.sign(x) ---> returns 1 if positive and -1 if negative
//number.toString()
//parseInt(string)

module.exports = reverseInt;
