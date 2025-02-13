/**
 * @param {string} s
 * @return {number}
 */

 const countPalindromes = (string, left, right) => {
    let count  = 0
    while(left >= 0 && right < string.length && string[left] === string[right]) {
        count++
        left--
        right++
    }
    return count
 }
var countSubstrings = function(s) {
    let count = 0

    for(let i = 0; i < s.length; i++) {

    // count palindromes with odd length
    count += countPalindromes(s, i, i)

    // count palindromes with event length
    count += countPalindromes(s, i, i+1)

    }
    
    return count
};