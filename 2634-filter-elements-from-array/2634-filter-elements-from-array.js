/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    if(!Array.isArray(arr)) throw new TypeError(`${arr} must be an array`)
    if(typeof fn !== 'function') throw new TypeError(`${fn} must be a function`)

    let result = []

    for(let i = 0; i < arr.length; i++) {
        if(i in arr) {
            if(fn(arr[i], i)) {
                result.push(arr[i])
            }
        }
    }

    return result
};