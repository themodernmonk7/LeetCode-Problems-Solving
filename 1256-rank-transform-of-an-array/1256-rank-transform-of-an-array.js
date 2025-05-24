/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const sortedNums = [...arr].sort((a, b) => a - b)
  let map = new Map()
  let rank = 1 
  
  for(let num of sortedNums) {
    if(!map.has(num)) {
      map.set(num, rank)
      rank++
    }
  }
  return arr.map((num) => map.get(num))
};