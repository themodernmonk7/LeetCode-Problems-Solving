/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
      const n = nums.length
  let left = 0
  let maxOnes = 0
  let zeroCount = 0

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      zeroCount++
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--
      }
      left++
    }

    maxOnes = Math.max(maxOnes, i - left)
  }

  return maxOnes
};