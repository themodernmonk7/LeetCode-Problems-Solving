/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

  const n = nums.length
  let maxCount = 0, currentCount = 0

  for(let i = 0; i < n; i++) {
    if(nums[i] === 1) {
        currentCount++
        maxCount = Math.max(currentCount, maxCount)
    } else {
        currentCount = 0
    }
  }

  return maxCount
};