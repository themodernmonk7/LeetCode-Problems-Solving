/**
 * @param {string} s
 * @return {string}
 */

  /**
  * Iterate through the string
  * Create two stack: 1. for number and 2. for character
  * When you find a number add that number in the number stack
  * If you find a character or opening bracket, add it into the character stack
  * When you find a closing bracket, start popping till the opening bracket
  * and multiply the string with the top number from the number stack
  * push the multiplied string into the stack
  */
  
var decodeString = function(s) {
    let numStack = [], charStack = []
    let currentNum = 0, currentString = ''

    for(let char of s) {
        if(!isNaN(char)) {
            currentNum = currentNum * 10 + Number(char)
        } else if(char === '[') {
            numStack.push(currentNum)
            charStack.push(currentString)
            currentString = ''
            currentNum = 0
        } else if(char === ']') {
            let repeatTimes = numStack.pop()
            let lastString = charStack.pop()
            currentString = lastString + currentString.repeat(repeatTimes)
        } else {
            currentString += char
        }
    }
    return currentString
};