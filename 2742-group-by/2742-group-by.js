/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    
    return this.reduce((result, value) => {
        const key = fn(value)
        if(!result[key]) {
            result[key] = []
        }
        result[key].push(value)
        return result
    }, {})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */