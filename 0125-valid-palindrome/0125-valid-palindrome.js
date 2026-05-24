/**
 * @param {string} s
 * @return {boolean}
 */


const isAlphanumeric = (string) => {
  const code = string.charCodeAt(0)
  
  // A-Z
  if(code >= 65 && code <= 90) return true
  // a-z
  if(code >= 97 && code <= 122) return true
  // 0 - 9      
  if(code >= 48 && code <= 57) return true
  return false
}


var isPalindrome = function(s) {
    let left = 0
    let right = s.length - 1
    
    
    while(left < right) {
      if(!isAlphanumeric(s[left])) {
        left++
        continue
      }
      
      if(!isAlphanumeric(s[right])) {
        right--
        continue
      }
      
      if(s[left].toLowerCase() !== s[right].toLowerCase()) return false
      left++
      right--
    }
    
    return true
};