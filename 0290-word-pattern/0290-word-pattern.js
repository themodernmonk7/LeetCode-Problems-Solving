/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
const pLength = pattern.length
    const sWord = s.split(' ')
    const sLength = sWord.length
    
    if(pLength !== sLength) return false
    
    let map = new Map()
    let sMap = new Map()
    
    for(let i = 0; i < pLength; i++) {
      let pChar = pattern[i], sChar = sWord[i]
      
      if(map.has(pChar) && map.get(pChar) !== sChar || sMap.has(sChar) && sMap.get(sChar) !== pChar) return false
      map.set(pChar, sChar)
      sMap.set(sChar, pChar)
    }
    
    return true
};