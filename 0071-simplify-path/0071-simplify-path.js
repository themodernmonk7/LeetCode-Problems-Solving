/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const part = path.split('/')
    let stack = []


    for(let char of part) {
        if(char === '' || char === '.') continue
        if(char === '..') {
            if(stack.length) stack.pop()
        } else {
            stack.push(char)
        }
    }

    return '/' + stack.join('/')
};