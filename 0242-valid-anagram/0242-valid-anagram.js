/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sN = s.length
    const tN = t.length

    if(sN !== tN) return false

    let freqChar = {}

    for(let char of s) {
        freqChar[char] = freqChar[char] ? freqChar[char] + 1 : 1
    }


    for(let char of t) {
        if(!freqChar[char]) return false
        freqChar[char]--
    }

    return true
};