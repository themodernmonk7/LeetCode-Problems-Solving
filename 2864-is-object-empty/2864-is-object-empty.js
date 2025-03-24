/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(typeof obj !== 'object' || obj === null)  {
        throw new TypeError(`${obj} is not an object`)
    }
    return Object.keys(obj).length === 0  
};