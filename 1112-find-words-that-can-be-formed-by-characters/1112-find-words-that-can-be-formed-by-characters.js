/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

var canFrom = function(word, charFreq) {
    let wordFreq = {}

    for(let char of word) {
        wordFreq[char] = wordFreq[char] ? wordFreq[char] + 1 : 1

        if(!charFreq[char] || wordFreq[char] > charFreq[char]) return false
    }
    return true
}
var countCharacters = function(words, chars) {
    
    let charFreq = {}
    let charLength = 0

    for(let char of chars) {
        charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1
    }

    for(let word of words) {
        if(canFrom(word, charFreq)) {
            charLength += word.length
        }
    }
    return charLength
};