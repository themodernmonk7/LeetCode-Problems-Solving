/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {

    // 1. Record the last occurence of each character
    const lastOccurence = {}

    for(let i = 0; i < s.length; i++) {
        lastOccurence[s[i]] = i
    }

    // 2. Traverse the string and find the partition
    let result = []
    let start = 0
    let end = 0

    for(let i = 0; i < s.length; i++) {
        end = Math.max(end, lastOccurence[s[i]])

        if(i === end) {
            result.push(end - start + 1)
            start = i + 1
        }      
    }
    return result
};