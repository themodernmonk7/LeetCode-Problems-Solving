/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const wordToString1 = word1.join("")
    const wordToString2 = word2.join("")
    if(wordToString1.length !== wordToString2.length) return false
    return wordToString1 === wordToString2
};