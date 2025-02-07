/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const n = s.length
    let countChar = {}

    for(let i = 0; i < n; i++) {
        const char = s[i]
        countChar[char] = countChar[char] ? countChar[char] + 1 : 1
    }

    for(let i = 0; i < n; i++) {
        const char = s[i]
        if(countChar[char] === 1) return i
    }
    return -1
};