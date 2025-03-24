/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    if(typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`)
    }
    if(!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not an Array`)
    }
    const n = arr.length
    if(n === 0) return []

    let result = []

    for(let i = 0; i < n; i++) {
        if(fn(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
};