/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxAltitude = 0
    let point = 0

    for(let num of gain) {
        point += num 
        maxAltitude = Math.max(point, maxAltitude )
    }
    return maxAltitude
};