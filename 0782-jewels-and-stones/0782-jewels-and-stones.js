/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
      let count = 0
  let charFreq = {}

  for (let char of stones) {
    charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1
  }

  for (let char of jewels) {
    if (charFreq[char]) {
      count += charFreq[char]
    }
  }
  return count
};