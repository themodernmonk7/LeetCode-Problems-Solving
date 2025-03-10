/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let set = new Set()
    let maxLength = 0

    for(let i = 0; i < s.length; i++) {

        while(set.has(s[i])) {
            set.delete(s[left])
            left++
        }
    set.add(s[i])
    maxLength = Math.max(maxLength, i - left + 1)
    }
    return maxLength
};