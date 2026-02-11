/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const n = strs.length
    let map = new Map()

    for(let i = 0; i < n; i++) {
        const sortCharacter = strs[i].split('').sort().join('')
        if(!map.has(sortCharacter)) {
          map.set(sortCharacter, [])
        }
        map.get(sortCharacter).push(strs[i])
    }
    
    return Array.from(map.values())
};