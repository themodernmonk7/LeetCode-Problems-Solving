/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const n = nums.length
  
  let index = 0
  
  for(let i = 0; i < n; i++) {
    const currentNum = nums[i]
    
    if(currentNum !== 0) {
      nums[index] = nums[i]
      index++
    }
  }
  
  for(let i = index; i < n; i++) {
    nums[i] = 0
  }
  
  return nums
};