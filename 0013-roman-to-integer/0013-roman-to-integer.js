/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numStore = {
            I:1,
            V:5,
            X:10,
            L:50,
            C:100,
            D:500,
            M:1000,
    }
    
    const n = s.length
    
    let result = 0
    
    
    for(let i = 0; i < n; i++) {
      if(i < n && numStore[s[i]] < numStore[s[i + 1]] ) {
        result -= numStore[s[i]]
      } else {
        result += numStore[s[i]]
      }
    }
    
    return result
};