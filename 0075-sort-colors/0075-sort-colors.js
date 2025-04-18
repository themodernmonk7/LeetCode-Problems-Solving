/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var sortColors = function(arr) {
    const n = arr.length
    let start = 0
    let mid = 0
    let end = n - 1
    
    while(mid <= end) {
        if(arr[mid] === 0) {
            [arr[mid], arr[start]] = [arr[start], arr[mid]]
            mid++
            start++
        } else if(arr[mid] === 1) {
            mid++
        } else {
            [arr[mid], arr[end]] = [arr[end], arr[mid]]
            end--
        }
    }
    return arr
};