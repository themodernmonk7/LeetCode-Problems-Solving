/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const n = s.length
    let vowels = new Set(["a", "e", "i", "o", "u"] )
    let maxVowels = 0, currentVowels = 0

    for(let i = 0; i < k; i++) {
        if(vowels.has(s[i])) {
            currentVowels++
        }
    }

    maxVowels = currentVowels

    for(let i = k; i < n; i++) {
        if(vowels.has(s[i])) currentVowels++
        if(vowels.has(s[i - k])) currentVowels--
        maxVowels = Math.max(maxVowels, currentVowels)
    }
    return maxVowels
};