/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const n = nums.length
    let map = new Map()

    for(let i = 0; i < n; i++) {
        if(map.has(nums[i]) && i - map.get(nums[i]) <= k ) return true

        map.set(nums[i], i)
    }

    return false
};