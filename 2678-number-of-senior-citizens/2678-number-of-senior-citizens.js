/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    const n = details.length
    let count = 0

    for(let i = 0; i < n; i++) {
        let age = Number(details[i].substring(11,13))
        if(age > 60) count++
    }

    return count
};