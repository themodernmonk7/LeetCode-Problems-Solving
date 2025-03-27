/**
 * @param {string} s
 * @return {string}
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