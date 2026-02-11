/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length
    let freq = {}

    for(let num of nums) {
        freq[num] = freq[num] ? freq[num] + 1 : 1
        if(freq[num] > n / 2 ) return num
    }
};