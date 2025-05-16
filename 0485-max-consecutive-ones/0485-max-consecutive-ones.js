/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const n = nums.length
    let maxOnes = 0
    let currentOne = 0

    for(let i = 0; i < n; i++) {
        if(nums[i] === 1) {
            currentOne++
            maxOnes = Math.max(maxOnes, currentOne)
        } else {
            currentOne = 0
        }

    }

    return maxOnes
};