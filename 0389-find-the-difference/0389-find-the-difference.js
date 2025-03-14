/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  if (s.length === 0) return t

  let sFreq = {}

  for (let char of t) {
    sFreq[char] = sFreq[char] ? sFreq[char] + 1 : 1
  }

  for (let char of s) {
    if (sFreq[char]) {
      sFreq[char]--
    }
  }
  for (let key in sFreq) {
    if (sFreq[key]) return key
  }
};