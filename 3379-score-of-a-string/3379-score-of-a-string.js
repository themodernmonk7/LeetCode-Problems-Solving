/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(string) {
    const n = string.length
    let result = 0
    for(let i = 0; i < n - 1; i++) {
        let currentChar = string[i].charCodeAt()
        let nextChar = string[i+1].charCodeAt()
        result += Math.abs(currentChar - nextChar)
    }

    return result
};