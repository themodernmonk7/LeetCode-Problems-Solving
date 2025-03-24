/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if(!Array.isArray(arr)) {
        throw new Error('Invalid arguments: First argument msut be an array')
    }
       
  if(size <= 0) return []
  const n = arr.length
  let result = []
  
  for(let i = 0; i < n; i+=size) {
    const value = arr.slice(i, i + size)
    result.push(value)
  }
  return result
};
