/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    if(!Array.isArray(arr)) {
        throw new TypeError('first argument must be an array')
    }

    if(typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`)
    }

    let result = []

    for(let i = 0; i < arr.length; i++) {
        if(i in arr) {
        result[i] = fn(arr[i], i, arr)
        }
    }

    return result
};