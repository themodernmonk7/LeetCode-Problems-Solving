/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    const n = nums.length
    const sortNums = nums.sort((a, b) => a - b)
    let streak = 1
    let maxLength = 1

    for(let i = 1; i < nums.length; i++ ) {
        if(sortNums[i] === sortNums[i - 1]) continue

        if(sortNums[i] === sortNums[i - 1] + 1) {
            streak++
        } else {
            maxLength = Math.max(maxLength, streak)
            streak = 1
        }
    }
    return Math.max(maxLength, streak)
};