/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    if(typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`)
    }
    if(!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not array`)
    }
    if(arr.length === 0) return []

    let result = new Array().fill(arr.length)

    for(let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i, arr)
    }
    return result
};