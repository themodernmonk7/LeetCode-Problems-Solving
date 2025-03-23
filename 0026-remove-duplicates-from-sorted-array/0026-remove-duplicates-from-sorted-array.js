/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
 - Sorted array, which means that duplicates element will be beside each other
 - If the current element is equal to the next element then skip that element using continue
 - If the current element is not equal to the next element, then same the particular element in the array
 - Return the count of unique elements after removing the duplicates
  */

var removeDuplicates = function(nums) {
    const n = nums.length
    let index = 0

    for(let i = 1; i < n; i++) {
        if(nums[i] !== nums[index]) {
            index++
            nums[index] = nums[i]
        }
    }
    return index + 1
};