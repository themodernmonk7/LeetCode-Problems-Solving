/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(typeof obj !== 'object' || obj === null) return obj
  if(Array.isArray(obj)) {
    return obj.reduce((accumulator, value) => {
      if(value) accumulator.push(compactObject(value))
      return accumulator
    }, [])
  }
  
  return Object.keys(obj).reduce((accumulator, key) => {
    if(obj[key]) accumulator[key] = compactObject(obj[key])
    return accumulator
  }, {})
};