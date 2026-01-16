/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sN = s.length
    const tN = t.length
    
    if(sN !== tN) return false
    
   const charFreq = {}
   
   for(let i = 0; i < sN; i++) {
     const char = s[i]
     
     charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1
   }
   
   
   for(let i = 0; i < tN; i++) {
     const char = t[i]
     if(!charFreq[char]) return false
     charFreq[char]--
   }
   
   return true
    
};