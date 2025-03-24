/**
 * @param {string} s
 * @return {string}
 */

const countPalindrome = (s, left, right) => {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--
        right++
    }
    return s.substring(left + 1, right)
}
var longestPalindrome = function(s) {
    let longest = ''

 for (let i = 0; i < s.length; i++) {

        let oddPalindrome = countPalindrome(s, i, i);
        let evenPalindrome = countPalindrome(s, i, i + 1);

        if (oddPalindrome.length > longest.length) longest = oddPalindrome;
        if (evenPalindrome.length > longest.length) longest = evenPalindrome;
    }
    
    return longest
};