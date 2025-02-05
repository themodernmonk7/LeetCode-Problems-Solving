/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const n = nums.length
    let store = {}
    let sum = 0
    
    for(let i = 0; i < n; i++) {
        const num = nums[i]
        store[num] = store[num] ? store[num] + 1 : 1
    }

    for(let i =  0; i < n; i++) {
        const num = nums[i]
        if(store[num] === 1) {
            sum += num
        }
    }
    return sum
};