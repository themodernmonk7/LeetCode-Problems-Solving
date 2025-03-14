/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let sFreq = {}

  for (let char of s) {
    sFreq[char] = sFreq[char] ? sFreq[char] + 1 : 1
  }

  for (let char of t) {
    if (!sFreq[char]) return char
      sFreq[char]--
  }
};