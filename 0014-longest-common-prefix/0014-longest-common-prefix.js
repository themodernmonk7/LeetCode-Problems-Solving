/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // sort the array alphabetically
    const sortArray = strs.sort()
    const n = sortArray.length
    // Get the first and the last string for comparing with each other
    let first = sortArray[0]
    let last = sortArray[n - 1]
    let result = ''

    for(let i = 0; i < first.length; i++) {
        if(first[i] !== last[i]) {
            break
        }
        result += first[i]
    }
    return result
    
};