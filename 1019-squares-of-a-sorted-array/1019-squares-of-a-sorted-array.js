/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const n = nums.length

    for(let i = 0; i < n; i++) {
        nums[i] = nums[i] * nums[i]
    }


    let left = 0
    let right = n - 1
    let result = new Array(n)

    for(let i = n -1 ; i >= 0; i--) {
        if(nums[left] > nums[right]) {
            result[i] = nums[left]
            left++
        } else {
            result[i] = nums[right]
            right--
        }
    }
    return result
};