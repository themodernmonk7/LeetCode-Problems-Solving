/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let n1 = s.length
  let n2 = t.length
  
  if(n1 !== n2) return false
  
  const charFreq = {}
  
  for(let char of s) {
    charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1
  }
  
  
  for(let char of t) {
    if(!charFreq[char]) return false
    charFreq[char]--
  }
  
  return true
    
};