/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  const n = s.length
  let maxCount = 1
  let current = 1
  for (let i = 1; i < n; i++) {
    if (s[i] === s[i - 1]) {
      current++
    } else {
      current = 1
    }
    maxCount = Math.max(maxCount, current)
  }

  return maxCount
};