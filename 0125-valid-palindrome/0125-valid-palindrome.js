/**
 * @param {string} s
 * @return {boolean}
 */

const isAlphanumeric = (string) => {
  
  if(typeof string !== 'string') {
    throw new TypeError(`${string} must be a string`)
  }
  const value = string.trim()
  const regex = /^[a-z0-9]+$/i
  const isValid = regex.test(value)
  
  if(isValid) {
    return true
    
  } else {
    return false
  }
}
 
var isPalindrome = function(string) {
      const n = string.length
  let left = 0
  let right = n - 1
  
  while(left < right) {
    
    if(!isAlphanumeric(string[left])) {
      left++
      continue
    }
    
    if(!isAlphanumeric(string[right])) {
      right--
      continue
    }
    
    if(string[left].toLowerCase() !== string[right].toLowerCase()) return false
    left++
    right--
  }
  
  return true

};