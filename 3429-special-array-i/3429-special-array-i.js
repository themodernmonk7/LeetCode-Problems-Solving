/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
        const n = nums.length
    if(n === 1) return true
    for(let i = 1; i < n; i++) {
      if(nums[i] % 2 === 0 && nums[i-1] % 2 === 0) return false
      if(nums[i] % 2 !== 0 && nums[i-1] % 2 !== 0) return false 
    }
      return true
};