/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arrayNum = x.toString().split("")
    const n = arrayNum.length
    let left = 0
    let right = n - 1

    while(left <= right) {
        if(arrayNum[left] !== arrayNum[right]) return false
        left++
        right--
    }
    return true
};