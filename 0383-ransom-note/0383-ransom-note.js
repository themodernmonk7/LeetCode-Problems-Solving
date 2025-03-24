/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const charFreq = {}


    for(let char of magazine) {
        charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1
    }


    for(let char of ransomNote) {
        if(!charFreq[char]) return false
        charFreq[char]--
    }

    return true
};