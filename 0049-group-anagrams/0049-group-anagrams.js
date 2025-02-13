/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const n = strs.length
    let map = new Map()

    for(let i = 0; i < n; i++) {
        const sortString = strs[i].split("").sort().join("")
        if(!map.has(sortString)) {
            map.set(sortString, [])
        }
        map.get(sortString).push(strs[i])
    }
    return Array.from(map.values())
};