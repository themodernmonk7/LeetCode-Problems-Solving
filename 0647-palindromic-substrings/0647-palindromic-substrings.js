/**
 * @param {string} s
 * @return {number}
 */

const countPalindromes = (s, left, right) => {
  
  let count = 0
  
  while(left >= 0 && right < s.length && s[left] === s[right]) {
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
    // count palindromes with even length
    count += countPalindromes(s, i, i + 1)
  }
  
  return count
};