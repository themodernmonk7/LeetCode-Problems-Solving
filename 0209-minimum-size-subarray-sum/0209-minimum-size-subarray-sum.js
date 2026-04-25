/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    const n = nums.length
    let minSize = Infinity
    let left = 0
    let sum = 0

    for(let i = 0; i < n; i++) {
        sum += nums[i]

        while(sum >= target) {
            minSize = Math.min(minSize, i - left + 1)
            sum -= nums[left]
            left++
        }
    }

    return minSize === Infinity ? 0 : minSize
    
};