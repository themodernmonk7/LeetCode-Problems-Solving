/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const sortWords = strs.sort()
    const n = sortWords.length

    let first = sortWords[0]
    let last = sortWords[n - 1]
    let result = ""

    for(let i = 0; i < first.length; i++) {
        if(first[i] !== last[i]) break
        result += first[i]
    }

    return result
};