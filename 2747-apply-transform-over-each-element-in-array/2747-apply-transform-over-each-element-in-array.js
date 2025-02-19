/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    if(!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`)
    }

    let result = []
    for(let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i, arr))
    }
    return result
};