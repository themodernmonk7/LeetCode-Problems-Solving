/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  const n = nums.length
  let left = 0
  let sum = 0
  let minLength = Infinity

  for(let i = 0; i < n; i++) {
    sum += nums[i]
    while(sum >= target) {
        minLength = Math.min(minLength, i - left + 1)
        sum -= nums[left]
        left++
    }
  }

  return minLength === Infinity ? 0 : minLength
};