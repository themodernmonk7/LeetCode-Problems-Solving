/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let sum = 0

    for(let i = 0; i < num.length; i++) {
        const currentNum = parseInt(num[i])
        if(i % 2 === 0) {
            sum -= currentNum
        } else {
            sum += currentNum
        }
    }

    return sum === 0
};