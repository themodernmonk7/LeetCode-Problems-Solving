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
    // update the frequency of the character
    freqChar[char] = freqChar[char] ? freqChar[char] + 1 : 1
    // update the maximum frequencey of the character
    maxFreq = Math.max(maxFreq, freqChar[char])
    
    // characters neet to be changed = window - maxFreq > k then we need to shrink the window
    
    if((i - left + 1) - maxFreq > k) {
      freqChar[s[left]]--
      left++
    }
    
    maxSize = Math.max(maxSize, i - left + 1 )
    
  }
  
  return maxSize
};