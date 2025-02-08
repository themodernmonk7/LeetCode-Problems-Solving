/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(typeof obj !== 'object' || obj === null) return obj

    if(Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject)
    }

    let result = {}
    for(let key in obj) {
        const value = obj[key]
        if(value) {
            result[key] = compactObject(value)
        }
    }
    return result
};