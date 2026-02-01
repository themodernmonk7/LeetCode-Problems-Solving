/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
   return this.reduce((result, currentValue) => {
    const key = fn(currentValue)
    if(!result[key]) {
        result[key] = []
    }
    result[key].push(currentValue)
    return result
   }, {})

};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */