/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    const sortNums = nums.sort((a, b) => a - b)
    const n = sortNums.length

    let maxLength = 1
    let streak = 1

    for(let i = 1; i < n; i++) {
        if(nums[i] === nums[i - 1]) continue

        if(nums[i] === nums[i - 1] + 1) {
            streak++
        } else {
            maxLength = Math.max(maxLength, streak)
            streak = 1
        }
    }

    return Math.max(maxLength, streak)
};