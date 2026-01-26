/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    if(!Array.isArray) {
        throw new TypeError(`${arr} must be an array`) 
    }

    if(typeof fn !== 'function') {
        throw new TypeError(`${fn} must ben an array`)
    }

    const n = arr.length
    let result = []

    for(let i = 0; i < n; i++) {
        if(i in arr) {
            if(fn(arr[i], i)) {
                result.push(arr[i])
            }
        }
    }

    return result
};