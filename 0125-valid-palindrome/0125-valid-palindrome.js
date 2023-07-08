/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanString = s.replace(/[^a-z0-9]/gi,"").toLowerCase()
    
    return cleanString.split("").reverse().join("") === cleanString
};