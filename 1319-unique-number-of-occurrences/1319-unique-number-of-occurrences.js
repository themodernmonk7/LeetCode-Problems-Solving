/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let numFreq = new Map()

    for(let num of arr) {
        numFreq.set(num, (numFreq.get(num) || 0) + 1)
    }
    

    let freqSet = new Set(numFreq.values());

    console.log(numFreq.size)
    return freqSet.size === numFreq.size;
};