/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const n = s.length
    let left = 0
    let freqChar = {}
    let maxSize = 0
    let maxFreq = 0

    for(let i = 0; i < n; i++) {
        const char = s[i]
        freqChar[char] = freqChar[char] ? freqChar[char] + 1 : 1
        maxFreq = Math.max(maxFreq, freqChar[char])

        // Charcter need to be change when windowSize - maxFreq > k
        // reduce the window size
        // const windowSize = i - left + 1
        if((i - left + 1) - maxFreq > k) {
            freqChar[s[left]]--
            left++
        }

        maxSize = Math.max(maxSize, i - left + 1)
    }

    return maxSize
};