/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let oddIndices = 0
    let evenIndices = 0

    for(let i = 0; i < num.length; i++) {
        const currentNum = parseInt(num[i])
        if(i % 2 === 0) {
            evenIndices += currentNum
        } else {
            oddIndices += currentNum
        }
    }

    return oddIndices === evenIndices
};