/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    if(!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an array`)
    }

    let result = []

    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
};