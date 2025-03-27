/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const n = nums.length
    let result = []
    let start = nums[0]

    for(let i = 1; i <= n; i++) {

        if(nums[i] === nums[i-1]+1) continue

        if(start === nums[i-1]) {
            result.push(start.toString())
        } else {
            result.push(start + '->' + nums[i-1])
        }
        
        if(i < n) start = nums[i]
    }

    return result
};