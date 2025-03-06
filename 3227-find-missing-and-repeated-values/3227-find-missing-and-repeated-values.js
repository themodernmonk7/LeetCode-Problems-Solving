/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length
    let storeNum = new Set()
    let repeatNum
    let missingNum
    let actualSum = 0
    let expectedSum = (n*n) * (n*n+1) / 2
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            const value = grid[i][j]
            actualSum += value
            if(storeNum.has(value)) {      
                repeatNum = value
            } else {
                storeNum.add(value)
            }
        }
    }
    missingNum = expectedSum + repeatNum - actualSum
    return [repeatNum, missingNum]
};