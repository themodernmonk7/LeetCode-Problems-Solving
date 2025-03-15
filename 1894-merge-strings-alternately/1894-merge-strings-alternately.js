/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = ''
    const n = Math.min(word1.length, word2.length)
    for(let i = 0; i <n; i++ ) {
      result+= word1[i] + word2[i]
    }
    
    result += word1.slice(n) + word2.slice(n)
    return result
};