/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n = nums.length
    let map = new Map()

    for(let i = 0; i < n; i++) {
        const currentNum = nums[i]
        const secondNum = target - currentNum

        if(map.has(secondNum)) {
            return [map.get(secondNum), i]
        }
        map.set(currentNum, i)
    }
};