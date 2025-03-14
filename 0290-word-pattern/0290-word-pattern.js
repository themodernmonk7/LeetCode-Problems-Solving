/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
      const words = s.split(' ')
  if(pattern.length !== words.length) return false
  
  let pMap = new Map()
  let sMap = new Map()
  
  
  for(let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    const word = words[i]
    
    if(pMap.has(char)) {
      if(pMap.get(char) !== word) return false
    } else {
      pMap.set(char, word)
    }
    
    if(sMap.has(word)) {
      if(sMap.get(word) !== char) return false
      
    } else {
      sMap.set(word, char)
    }
  }
  return true
};