/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
     let leftIndex = 0
    let rightIndex = nums.length - 1
    // Run the while loop as long as array not become empty
    while(leftIndex <= rightIndex) {
      // Now each iteration find the middle element in the array
      let middleIndex = Math.floor( (leftIndex + rightIndex) / 2)
      if(target === nums[middleIndex]) {
        return middleIndex
      }
      if(target < nums[middleIndex]) {
        rightIndex = middleIndex - 1
      } else {
        leftIndex = middleIndex + 1
      }
    }
    return -1

};