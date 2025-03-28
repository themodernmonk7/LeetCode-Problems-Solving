/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
        const n = nums.length
    let sumLeft = 0
    let sumRight = nums.reduce((acc, curr) => acc + curr, 0)

    for(let i = 0; i < n; i++) {
        sumRight -= nums[i]

        if(sumLeft === sumRight) return i

        sumLeft += nums[i]
    }

    return -1
};