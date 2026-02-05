/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    
    for(let token of tokens) {
      switch (token) {
        case '+': {
          const right = stack.pop()
          const left = stack.pop()
          stack.push(left + right)
          break;
        }
          
          case '-': {
          const right = stack.pop()
          const left = stack.pop()
          stack.push(left - right)
          break;
          }
          
          case '*': {
          const right = stack.pop()
          const left = stack.pop()
          stack.push(left * right)
          break;
          }
          
          case '/': {
          const right = stack.pop()
          const left = stack.pop()
          const value = left / right
          
          stack.push(value < 0 ? Math.ceil(value) : Math.floor(value))
          break;
          }
        
        default:
          stack.push(Number(token))
      }
    }
    
    
    return stack[0]
};