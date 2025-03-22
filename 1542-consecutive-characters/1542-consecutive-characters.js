/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
      const n = s.length
  let maxCount = 0
  for (let i = 0; i < n; i++) {
    let current = 0

    for (let j = 0; j < n; j++) {
      if (s[i] === s[i + j]) {
        current++
        maxCount = Math.max(maxCount, current)
      } else {
        current = 0
      }
    }
  }

  return maxCount
};