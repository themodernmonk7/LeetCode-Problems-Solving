/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        let stack = []
    
    
    for(let char of s) {
      const top = stack.length - 1
      if(char === '(' || char === '[' || char === '{') {
        stack.push(char)
      } else if(stack[top] === '(' && char === ')' || stack[top] === '[' && char === ']' ||
      stack[top] === '{' && char === '}') {
        stack.pop()
      } else {
        return false
      }
    }
    
    return stack.length === 0
};