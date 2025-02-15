/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const n = nums.length
  k = k % n

  let result = []

  for(let i = n - k; i < n; i++) {
    result.push(nums[i])
  }  

  for(let i = 0; i < n - k; i++) {
    result.push(nums[i])
  }
   for (let i = 0; i < n; i++) {
    nums[i] = result[i];
  }
};