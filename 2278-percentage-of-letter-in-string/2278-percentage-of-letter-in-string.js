/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
const n = s.length;
    let freq = {};

    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    const percentage = (freq[letter] || 0) / n * 100;
    return Math.floor(percentage);
};