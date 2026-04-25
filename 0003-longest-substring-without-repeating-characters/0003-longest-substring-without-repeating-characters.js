/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length
    let left = 0
    let maxLength = 0
    let set = new Set()


    for(let i = 0; i < n; i++) {
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