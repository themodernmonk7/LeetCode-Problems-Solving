/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    const left = findLeftBound(nums, target)
    const right = findRigthBound(nums, target)
    return [left, right]

    
    // search on the left side
    function findLeftBound (nums, target) {
        const n = nums.length
        let left = 0 
        let right = n - 1
        let index = -1

        while(left <= right) {
            let mid = Math.floor((right + left) / 2)

            if(target === nums[mid]) {
                index = mid
                // search on the left side
                right = mid - 1
            } else if(target > nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return index
    }

    // search on the rigth side  
    function findRigthBound (nums, target) {
        const n = nums.length
        let left = 0
        let right = n - 1
        let index = -1

        while(left <= right) {
            let mid = Math.floor((right + left) / 2)

            if(target === nums[mid]) {
                index = mid
                // search on the right side
                left = mid + 1
            } else if (target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return index
    }
};