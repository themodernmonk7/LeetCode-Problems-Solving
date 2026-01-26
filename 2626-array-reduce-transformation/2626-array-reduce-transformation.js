/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(typeof fn !== 'function') {
        throw new TypeError(`${fn} must be a function`)
    }

    let accumulator = init
    let startIndex = 0
    const n = nums.length

    if(accumulator === undefined) {
        for(let i = 0; i < n; i++) {
            if(i in nums) {
                accumulator = nums[i]
                startIndex = i + 1
                break
            }
        }
    }

    if(accumulator === undefined) {
        throw new TypeError('Reduce of empty array with no initival value')
    }

    for(let i = startIndex; i < n; i++) {
        if(i in nums) {
            accumulator = fn(accumulator, nums[i], i, nums)
        }
    }

    return accumulator
};