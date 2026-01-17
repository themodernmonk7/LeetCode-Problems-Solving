/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const n = nums.length
    let numFreq = {}

    for(let num of nums) {
        numFreq[num] = (numFreq[num] || 0) + 1
    }

    nums.sort((a, b) => {
        if(numFreq[a] !== numFreq[b]) {
            return numFreq[a] - numFreq[b]
        }

        return b - a
    })

    return nums
};