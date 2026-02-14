/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    const n = s.length
    let diff = 0

    for(let i = 1; i <n; i++) {
        diff += Math.abs(s[i-1].charCodeAt(0) - s[i].charCodeAt(0))
    }

    return diff
};