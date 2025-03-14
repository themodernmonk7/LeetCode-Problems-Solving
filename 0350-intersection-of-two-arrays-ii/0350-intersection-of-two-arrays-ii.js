/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let numFreq = {}
  let result = []
  
  for(let num of nums1) {
    numFreq[num] = numFreq[num] ? numFreq[num] + 1 : 1
  }
  
  console.log(numFreq)
  for(let num of nums2) {
    if(numFreq[num]) {
      console.log(num)
      result.push(num)
      numFreq[num]--
    }
  }
  return result
};