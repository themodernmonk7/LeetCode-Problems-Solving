/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const n = nums.length
    let maxSum = -Infinity
    let currentSum = 0

    for(let i = 0; i < n; i++) {
        currentSum += nums[i]
        maxSum = Math.max(maxSum, currentSum)

        if(currentSum <= 0) currentSum = 0
    }

    return maxSum
    
};