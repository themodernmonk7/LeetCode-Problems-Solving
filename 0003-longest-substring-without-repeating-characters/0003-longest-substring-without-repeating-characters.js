/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    const n = s.length
    let result = 0
    let set = new Set()

    for(let i = 0; i < n; i++) {
        const char = s[i]

        while(set.has(char)) {
            set.delete(s[left])
            left++
        } 
        set.add(char)
        result = Math.max(result, i - left + 1)
    }

    return result
};