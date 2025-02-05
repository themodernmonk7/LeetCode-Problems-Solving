/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
        const n = nums.length
    
    let result = []
    for(let i = 0; i < n; i++) {
      const value = nums[i] * nums[i]
      result.push(value)
    }
    result.sort()
    const sorted  =result.sort((a, b) => a - b)
    return sorted
};