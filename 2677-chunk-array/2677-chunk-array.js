/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const n = arr.length
    let result = []

    for(let i = 0; i < n; i+=size) {
        const value = arr.slice(i, i + size)
        result.push(value)
    }

    return result
};
