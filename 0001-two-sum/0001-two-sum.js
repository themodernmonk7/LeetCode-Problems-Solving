/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    const n = nums.length

    for(let i = 0; i < n; i++) {
        let firstNum = nums[i]
        let secondNum = target - firstNum

        if(map.has(secondNum)) {
            return [map.get(secondNum), i]
        }
        map.set(nums[i], i)
    }
};