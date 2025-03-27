/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let numFreq = {}

    for(let num of arr) {
        numFreq[num] = numFreq[num] ? numFreq[num] + 1 : 1
    }


const array = Object.values(numFreq).sort()


for(let i = 1; i < array.length; i++) {
  if(array[i] === array[i-1]) return false
}

return true
};