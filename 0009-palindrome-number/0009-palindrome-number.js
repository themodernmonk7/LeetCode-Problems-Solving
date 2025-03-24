/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arrNum = x.toString().split('')
    const n = arrNum.length
    let left = 0
    let right = n - 1

    while(left <= right) {
        if(arrNum[left] !== arrNum[right]) return false
        left++
        right--
    }
    return true
};