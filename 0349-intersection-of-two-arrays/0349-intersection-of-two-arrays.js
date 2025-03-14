/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
        const unique = new Set(nums1)
    let result = []
    
    for(let num of nums2) {
      if(unique.has(num)) {
        result.push(num)
        
      }
    }
    return [...new Set(result)]
};