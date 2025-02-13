/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let set = new Set()
    let maxLength = 0

    for(let i = 0; i < s.length; i++) {
        const char = s[i]
        while(set.has(char)) {
            set.delete(s[left])
            left++
        }
        set.add(char)
        maxLength = Math.max(maxLength, i - left + 1)

    }
    return maxLength
};