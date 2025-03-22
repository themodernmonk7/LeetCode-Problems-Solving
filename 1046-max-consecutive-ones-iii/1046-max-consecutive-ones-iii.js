/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  const n = nums.length
  let zeroCount = 0
  let maxOnes = 0
  let left = 0

  for(let i = 0; i < n; i++) {
    if(nums[i] === 0) {
        zeroCount++
    }

    while(zeroCount > k) {
        if(nums[left] === 0) {
            zeroCount--
        }
        left++
    }

    maxOnes = Math.max(maxOnes, i - left + 1)
  }
  return maxOnes
};