/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
      let numStack = [], charStack = []
  let currString = '', currNum = 0
  
  
  for(let char of s) {
    
    if(!isNaN(char)) {
        // this is important to handle to double digit number
      currNum = currNum * 10 + Number(char)
    } else if (char === '[') {
      numStack.push(currNum)
      charStack.push(currString)
      currString = ''
      currNum = 0
    } else if (char === ']') {
      let repeatTimes = numStack.pop()
      let lastString = charStack.pop()
      currString = lastString + currString.repeat(repeatTimes)
    } else {
      currString += char
    }
  }
  
  return currString
};