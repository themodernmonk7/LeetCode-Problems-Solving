/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let value = BigInt(digits.join('')) + 1n
    return value.toString().split('')
};