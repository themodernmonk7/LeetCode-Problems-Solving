/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const n = s.length
  let vowels = new Set(["a", "e", "i", "o", "u"] )
  
  let maxVowels = 0
  let currentVowelsCount = 0
  
  for(let i = 0; i < k; i++) {
    const currentCharacter = s[i]
    if(vowels.has(currentCharacter)) {
      currentVowelsCount++
    }
  }
  
  maxVowels = currentVowelsCount
  
  for(let i = k; i < n; i++) {
    
    if(vowels.has(s[i])) currentVowelsCount++
    if(vowels.has(s[i - k])) currentVowelsCount--
    maxVowels = Math.max(maxVowels, currentVowelsCount)
  }
  
  return maxVowels
};