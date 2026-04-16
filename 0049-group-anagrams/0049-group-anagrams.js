/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
  const n = strs.length
  
  let map = new Map()
  
  for(let i = 0; i < n; i++) {
    let sortChar = strs[i].split('').sort().join('')
    
    if(!map.has(sortChar)) {
      map.set(sortChar, [])
    }
    
    map.get(sortChar).push(strs[i])
  }

  return Array.from(map.values())
};