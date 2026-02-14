/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const n = s.length
    let i = n -1
    let length = 0  

    while(i >= 0 && s[i] === ' ') {
        i--
    }

    while(i >= 0 && s[i] !== ' ') {
        length++
        i--
    }

    return length
};