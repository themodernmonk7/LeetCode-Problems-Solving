/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
        
  const n = nums.length
  if(n  < 2) return nums[0]
  let values = new Array(n).fill(0)
  
  values[0] = nums[0]
  values[1] = Math.max(nums[0], nums[1])
  
  for(let i = 2; i < n; i++) {
    values[i] = Math.max(values[i-2] + nums[i], values[i - 1])
  }
  
  return values[n - 1]
};