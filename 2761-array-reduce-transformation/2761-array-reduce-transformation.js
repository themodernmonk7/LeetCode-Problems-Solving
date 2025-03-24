/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {

    let accumulator = init
    let startIndex = 0

    if(arguments.length > 1) {
        accumulator = init
    } else {
        for(let i = 0; i < nums.length; i++) {
            if(nums.hasOwnProperty(i)) {
            accumulator = nums[i]
            startIndex = i + 1
            break
            }
        }

        if(accumulator === undefined) {
            throw new TypeError(`Reduce of empty array with no initial value`)
        }
    }

    for(let i = startIndex; i < nums.length; i++) {
        if(nums.hasOwnProperty(i)) {
        accumulator = fn(accumulator, nums[i], i, nums)
        }
    }

    return accumulator
};