/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()

  for(let i = 0; i < nums.length; i++) {
    let firstNum  = nums[i]
    let secondNum = target - firstNum

    if(map.has(secondNum)) {
        return [map.get(secondNum),i ]
    }
    map.set(nums[i], i)
  } 
  return [] 
};