/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    const result = nums.slice(1).sort((a, b) => a - b)
    return nums[0] + result[0] + result[1]
};