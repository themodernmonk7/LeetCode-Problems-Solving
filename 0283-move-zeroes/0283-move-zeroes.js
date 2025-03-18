/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const n = nums.length
  let nonZeroIndex = 0

  for(let i = 0; i < n; i++) {
    if(nums[i] !== 0) {
        nums[nonZeroIndex] = nums[i]
        nonZeroIndex++
    }
  }  

  for(let i = nonZeroIndex; i < n; i++) {
    nums[i] = 0
  }
  return 0
};