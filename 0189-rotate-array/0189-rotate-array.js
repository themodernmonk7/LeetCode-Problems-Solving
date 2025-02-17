/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const n = nums.length
  k = k % n
  if(k === 0) return 

  const reverse = (arr, start, end) => {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
  }  
    reverse(nums, 0, n - 1) // first reverse the entire array
    reverse(nums, 0, k - 1) // reverse the first k elements
    reverse(nums, k, n - 1); // then reverse then remaining n - k elements
};