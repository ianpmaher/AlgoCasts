// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let splitWord = str.split("")
    let reversedWord = splitWord.reverse()
    return reversedWord.join("")
}

module.exports = reverse;
