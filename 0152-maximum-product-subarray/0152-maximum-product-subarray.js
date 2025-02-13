/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const n = nums.length
    let leftProduct = 1
    let rightProduct = 1
    let maxProduct = -Infinity

    for(let i = 0; i < n; i++) {
        leftProduct = leftProduct === 0 ? 1 : leftProduct
        rightProduct = rightProduct === 0 ? 1 : rightProduct

        leftProduct *= nums[i]
        rightProduct *= nums[n - 1 - i]

        maxProduct = Math.max(maxProduct, Math.max(leftProduct, rightProduct))
    }
    return maxProduct
};