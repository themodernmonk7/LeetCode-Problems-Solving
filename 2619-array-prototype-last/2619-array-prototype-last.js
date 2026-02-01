/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    const arr = this
    if(arr.length > 0) return arr[arr.length - 1]
    return -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */