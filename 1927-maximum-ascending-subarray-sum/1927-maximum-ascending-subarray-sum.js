/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    const n = nums.length
    let maxTotal = nums[0]
    let currentSum = nums[0]
    
    for(let i = 1; i < n; i++) {
      if(nums[i] > nums[i-1]) {
        currentSum += nums[i]
      } else {
        currentSum = nums[i]
      }
      maxTotal = Math.max(maxTotal, currentSum)
    }
    return maxTotal
};