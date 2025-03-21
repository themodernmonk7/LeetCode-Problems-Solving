/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = {}

    for(let num of nums) {
        freq[num] = freq[num] ? freq[num] + 1 : 1
        if(freq[num] > nums.length/2) {
        return num
        } 
    }
};