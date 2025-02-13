/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = []
        let resolveCounter = 0

        functions.forEach((fn, index) => {
            fn().then((value) => {
                results[index] = value
                resolveCounter++

                if(resolveCounter === functions.length) {
                    resolve(results)
                }
            }).catch(reject)
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */