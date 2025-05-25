/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  const n = nums.length
  let operations = 0
  let map = new Map()
  
  
  for(let i = 0; i < n; i++) {
    const currentNum = nums[i]
    const secondNum = k - currentNum
    
    if(map.has(secondNum) && map.get(secondNum) > 0) {
      operations++
      map.set(secondNum, map.get(secondNum) - 1)
    } else {
      map.set(currentNum, (map.get(currentNum) || 0) + 1 )
    }
  }
  
  return operations
};