/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = []
    
    for(let operation of operations) {
      switch (operation) {
        case 'C': {
          const right = stack.pop()
          break;
        }
        case 'D': {
          stack.push(stack[stack.length - 1] * 2)
          break;
        }
        case '+': {
          const right = stack[stack.length - 1]
          const left = stack[stack.length - 2]
          stack.push(left + right)
          break;
        }
        
        default:
          stack.push(Number(operation))
      }
    }
    
    
    return stack.reduce((acc, curr) => {
      return acc + curr
    },0)
};