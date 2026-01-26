/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    if(!Array.isArray(arr)) {
        throw new TypeError(`${arr} must be an array`)
    }

    if(typeof fn !== 'function') {
        throw new TypeError(`${fn} must be a function`)
    }

    let result = []
    const n = arr.length

    for(let i = 0; i < n; i++) {
        if(i in arr) {
            result[i] = fn(arr[i], i, arr)
        }
    }

    return result
};