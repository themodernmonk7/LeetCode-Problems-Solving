/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const freq = {}

    for(let char of magazine) {
        freq[char] = freq[char] ? freq[char] + 1 : 1
    }

    for(let char of ransomNote) {
        if(!freq[char]) return false
        freq[char]--
    }

    return true
};