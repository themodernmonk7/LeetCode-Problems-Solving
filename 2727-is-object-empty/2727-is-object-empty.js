/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(typeof obj !== 'object' || obj === null) {
        throw new TypeError(`${obj} must be an object`)
    }
    return Object.keys(obj).length === 0
};