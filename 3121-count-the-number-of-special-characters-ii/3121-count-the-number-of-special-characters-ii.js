/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
        let count = 0
    
    for(let i = 0; i < 26; i++) {
      const lower = String.fromCharCode(97 + i)
      const upper = lower.toUpperCase()
      
      
      const lastLowerIndex = word.lastIndexOf(lower)
      const firstUpperIndex = word.indexOf(upper)
      
      
      if(lastLowerIndex !== -1 && firstUpperIndex !== -1 && lastLowerIndex < firstUpperIndex) {
        count++
      }
      
    }
      return count
};