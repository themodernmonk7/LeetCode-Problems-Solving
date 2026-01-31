/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const n = s.length
    let freq = {}

    for(let i = 0; i < n; i++) {
        const char = s[i]
        freq[char] = freq[char] ? freq[char] + 1 : 1
    }

    for(let i = 0; i < n; i++) {
        const char = s[i]
        if(freq[char] === 1) return i
    }

    return -1
};