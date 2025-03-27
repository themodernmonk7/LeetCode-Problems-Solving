/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let sortPoints = points.sort((a, b) => a[1] - b[1])
    let end = sortPoints[0][1]
    let arrows = 1

    for(let i = 1; i < sortPoints.length; i++) {
        if(sortPoints[i][0] <= end) {
            continue
        } else {
            arrows++
            end = sortPoints[i][1]
        }
    }

    return arrows
};