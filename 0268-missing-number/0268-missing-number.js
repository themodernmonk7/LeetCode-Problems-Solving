/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length
  const actualSum = nums.reduce((acc, curr) => acc + curr, 0)
  const expectedSum =  n * ((n + 1) / 2)
  return expectedSum - actualSum
};