/**
 * @param {number[][]} points
 * @return {number}
 */

  /**
  * Start with the first balloon’s end (x_end) as the first arrow position.
    If current balloon's start (x_start) ≤ previous arrow's end (x_end), then they overlap.
    If the next balloon overlaps, do nothing (since one arrow can burst both).
    If it doesn’t overlap, increase the arrow count and move to the next balloon’s end.
  */
var findMinArrowShots = function(points) {
    let sortPoints = points.sort((a, b) => a[1] - b[1])
    let end = sortPoints[0][1]
    let arrows = 1

    for(let i = 1; i < sortPoints.length; i++) {
        if(sortPoints[i][0] > end) {
            arrows++
            end = sortPoints[i][1]
        }
    }

    return arrows
};