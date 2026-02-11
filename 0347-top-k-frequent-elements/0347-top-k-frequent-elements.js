/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const n = nums.length
    let freq = {}

    for(let num of nums) {
        freq[num] = freq[num] ? freq[num] + 1 : 1
    }


    let bucket = new Array(n + 1).fill(null).map(() => [])

    for(let key in freq) {
        const count = freq[key]
        bucket[count].push(Number(key))
    }

    let result = []

    for(let i = n; i >= 0 && result.length < k; i--) {
        if(bucket[i].length > 0) {
            result.push(...bucket[i])
        }
    }

    return result.slice(0, k)

    };