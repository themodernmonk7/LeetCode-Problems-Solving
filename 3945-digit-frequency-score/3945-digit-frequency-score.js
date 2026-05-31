/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    const s = String(n).split('')
  let result = 0
  for(let n of s) {
    result += parseInt(n)
  }
  
  return result
};