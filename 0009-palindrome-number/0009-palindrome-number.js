/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x ===  Number([x].join("").split('').reverse().join(''))

};