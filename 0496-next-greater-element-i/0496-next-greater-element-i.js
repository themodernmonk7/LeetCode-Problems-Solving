/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let result = []

  for(let i = 0; i < nums1.length; i++) {
    const num = nums1[i]
        let found = false
        let ng = - 1

    for(let j = 0; j < nums2.length; j++) {
        if(nums2[j] === num) {
            found = true
        }

        if(found && nums2[j] > num) {
            ng = nums2[j]
            break
        }
    }
    result.push(ng)
  }  
  return result
};