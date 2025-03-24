/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0

    const sortNums = nums.sort((a, b) => a - b)
    let streak = 1
    let maxSize = 1

    for(let i = 1; i < nums.length; i++) {
        if(sortNums[i] === sortNums[i - 1]) continue
        if(sortNums[i] === sortNums[i - 1] + 1) {
            streak++
        } else {
            maxSize = Math.max(streak, maxSize)
            streak = 1
        }
    }    

    return Math.max(streak, maxSize)
};