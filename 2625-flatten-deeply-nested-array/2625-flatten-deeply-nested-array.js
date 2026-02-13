/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    
    const flatten = (array, depth) => {
        if(depth >= n) return array
        let result = []

       for(let element of array) {
        if(Array.isArray(element)) {
            result.push(...flatten(element, depth + 1))
        } else {
            result.push(element)
        }
       }
        return result
    }

    return flatten(arr, 0)
};