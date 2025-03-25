/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let freq = {}
  let result = []
  
  for(let num of nums1) {
    freq[num] = freq[num] ? freq[num] + 1 : 1
  }
  
  for(let num of nums2) {
    if(freq[num]) {
      result.push(num)
      freq[num]--
    }
  }
  
  return result
};