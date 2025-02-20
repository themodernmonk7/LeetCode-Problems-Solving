/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {

    const n = nums.length
    let accumulator = init
    let startIndex = 0

    if(accumulator === undefined) {
        for(let i = 0; i < n; i++) {
            if(nums.hasOwnProperty(i)) {
                accumulator = nums[i]
                startIndex = i + 1
                break
            }
        }
    }

    for(let i = startIndex; i < n; i++) {
        accumulator = fn(accumulator, nums[i], i, nums)
    }
    return accumulator
};