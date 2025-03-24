/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const sortString = strs.sort()
    const n = strs.length

    let first = sortString[0]
    let last = sortString[n -1]
    let result = ''

    for(let i = 0; i < first.length; i++) {

        if(first[i] !== last[i]) break
        result += first[i]
    }
    return result
};