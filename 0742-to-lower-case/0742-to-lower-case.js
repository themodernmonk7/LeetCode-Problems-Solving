/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
  let result = ''

  for(let char of s) {
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        const ascii = char.charCodeAt(0) + 32
        result += String.fromCharCode(ascii)
    } else {
        result += char
    }
  }

  return result
};