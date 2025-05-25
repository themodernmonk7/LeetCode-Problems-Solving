/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  const n = nums.length
  let currentSum = 0
  let maxSum = 0
  
  for(let i = 0; i < k; i++) {
    currentSum += nums[i]
  }
  
  maxSum = currentSum
  
  for(let i = k; i < n; i++) {
    currentSum += nums[i] - nums[i - k]
    maxSum = Math.max(maxSum, currentSum)
  }
  
  return maxSum / k
};