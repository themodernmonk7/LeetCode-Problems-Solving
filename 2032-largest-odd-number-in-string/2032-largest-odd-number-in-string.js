/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    const n = num.length
       for(let i = n - 1; i >= 0; i--){
      if(parseInt(num[i]) % 2 !== 0) {
        return num.substring(0, i + 1)
      }
    }
    return ""
};