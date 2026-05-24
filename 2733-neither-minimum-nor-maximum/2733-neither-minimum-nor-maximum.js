/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    let max = -Infinity
    let min = Infinity

    if(nums.length < 3) return -1

    for(let num of nums) {
        if(num > max) {
            max = num
        }
        if(num < min) {
            min = num
        }
    }
    
    for(let num of nums) {
      if(num !== min && num !== max) return num
    }

    return -1
};