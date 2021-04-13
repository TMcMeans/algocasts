// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charCountObj = str.split('').reduce((obj, char) => {
        !obj[char] ? obj[char] = 1 : obj[char]++
        return obj
    }, {})
   
    for (let char in charCountObj) {
        if (charCountObj[char] === Math.max(...Object.values(charCountObj))) {
            return char
        }
    }
    
}

module.exports = maxChar;
