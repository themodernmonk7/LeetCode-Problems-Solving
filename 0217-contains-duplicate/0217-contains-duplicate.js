/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const n = nums.length

  let set = new Set()

  for(let i = 0; i < n; i++) {
    const num = nums[i]
    if(set.has(num)) return true
    set.add(num, i)

  }  
    return false
};