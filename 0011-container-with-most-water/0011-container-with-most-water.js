/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0
    let rightPointer = height.length - 1
    let leftPointer = 0
    while(leftPointer < rightPointer) {
        const containerWidth = rightPointer - leftPointer
        const containerHeight = Math.min(height[leftPointer], height[rightPointer])
        const currentWater = containerWidth * containerHeight
        maxWater = Math.max(maxWater, currentWater)
        if(height[leftPointer] < height[rightPointer]) {
            leftPointer++
        } else {
            rightPointer--
        }
    }
    return maxWater
};