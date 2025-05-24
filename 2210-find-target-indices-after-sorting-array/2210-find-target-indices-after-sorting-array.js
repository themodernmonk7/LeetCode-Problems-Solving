/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
  const sortNums = nums.sort((a, b) => a - b)
  let result = []

  for(let i = 0; i < sortNums.length; i++) {
    const currentNum = sortNums[i]
    if(currentNum === target) {
      result.push(i)
    }
  }
  
  return result
};