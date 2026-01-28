/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const n = nums.length
    let max = 0
    let count = 0

    for(let i = 0; i < n; i++) {
        const num = nums[i]
        if(num === 1) {
            count++
            max = Math.max(max, count)
        } else {
            count = 0
        }
    }

    return max
};