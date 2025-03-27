/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let items = []

  for(let item of intervals) {
    if(items.length === 0 || items[items.length - 1][1] < item[0] ) {
        items.push(item)
    } else {
        let lastElement = items[items.length - 1][1]
        items[items.length - 1][1] = Math.max(lastElement, item[1] )
    }
  } 
  return items 
};