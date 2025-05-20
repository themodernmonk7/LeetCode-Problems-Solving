/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const n = nums.length
    // convert all 0s to -1

    for(let i = 0; i < n; i++) {
        if(nums[i] === 0) nums[i] = -1
    }

    let sum = 0
    let maxLength = 0

    let map = new Map()
    map.set(0, -1)


    for(let i = 0; i < n; i++) {
        sum += nums[i]

        if(map.has(sum)) {
            const last = map.get(sum)
            maxLength = Math.max(maxLength, i - last)
        } else {
            map.set(sum, i)
        }
    }

    return maxLength
};