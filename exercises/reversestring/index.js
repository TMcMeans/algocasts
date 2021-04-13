// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   let arr = Object.assign([], str).reverse().join('')
   return arr
}

//array.reverse()
// for (let char of str) { reversed = char + reversed }
// return str.split('').reduce((reversed, char) => char + reversed, '')

module.exports = reverse;
