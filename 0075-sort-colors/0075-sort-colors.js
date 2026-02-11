/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const n = nums.length
    let start = 0
    let mid = 0
    let end = n - 1

    while(mid <= end) {
        if(nums[mid] === 0) {
            [nums[mid], nums[start]] = [nums[start], nums[mid]]
            mid++
            start++
        } else if (nums[mid] === 1) {
            mid++
        } else {
            [nums[mid], nums[end]] = [nums[end], nums[mid]]
            end--
        }
    }

    return nums
};