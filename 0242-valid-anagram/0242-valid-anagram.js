/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let charFreq = {}

    for(let i = 0; i < s.length; i++) {
        const char = s[i]
        charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1
    }

    for(let i = 0; i < t.length; i++) {
        const char = t[i]
        if(!charFreq[char]) return false
        charFreq[char]--
    }

    return true
};