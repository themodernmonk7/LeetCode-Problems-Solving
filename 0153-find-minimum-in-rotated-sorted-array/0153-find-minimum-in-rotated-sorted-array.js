/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const n = nums.length
  let left = 0
  let right =  n - 1 
  let result = Infinity
  
  while(left <= right) {
    let mid = Math.floor((right + left) / 2)
    
    if(nums[left] < nums[mid]) {
      result = Math.min(result, nums[left])
      left = mid + 1
    } else {
      result = Math.min(result, nums[mid])
      right = mid - 1
    }
  }
  return result
};