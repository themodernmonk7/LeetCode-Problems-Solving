/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arrLength = nums.length
    for(let i=0; i <= arrLength; i++) {
        for(let j= i + 1; j <=arrLength; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};