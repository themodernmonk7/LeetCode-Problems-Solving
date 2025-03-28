/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let map = new Map()
    let count = 0

    for(let num of nums) {
        let secondNum = k - num

        if(map.has(secondNum) && map.get(secondNum) > 0) {
            count++
            map.set(secondNum, map.get(secondNum) - 1)
        } else {
            map.set(num, (map.get(num) || 0) + 1 )
        }
    }

    return count
};