/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const merged = [...arr1, ...arr2].reduce((result, obj) => {
    const id = obj.id
    
    result[id] = result[id] ? {...result[id], ...obj } : obj
    return result
  }, {})
  
  return Object.values(merged).sort((a, b) => a.id - b.id)
};