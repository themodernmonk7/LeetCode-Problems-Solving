/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b ) => a[1] - b[1])
    
    let end = intervals[0][1]
    let count = 0
    console.log(intervals)
    
    for(let i = 1; i < intervals.length; i++) {
      if(intervals[i][0] < end) {
        count++
      } else {
        end = intervals[i][1]
      }
    }
    return count
};