/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
        const n = s.length
    
    let freq = {}
    
    
    for(let char of s) {
      freq[char] = (freq[char] || 0) + 1
    }
    
    const result = s.split("").sort((a, b) => {
      if(freq[a] !== freq[b]) return freq[b] - freq[a]
      
      // Same frequency -> sort characters descending
      // if(a > b) return -1
      // if(a < b) return 1
      return b.localeCompare(a)
    })
    
    return result.join("")
};