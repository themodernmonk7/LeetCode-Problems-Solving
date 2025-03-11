/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false

    let sMap = {}
    let tMap = {}

    for(let i = 0; i < s.length; i++) {
        const char = s[i]
        if(!sMap[char]) {
            sMap[char] = t[i]
        }

        if(sMap[char] && sMap[char] !== t[i]) return false
    }

    for(let i = 0; i < t.length; i++) {
        const char = t[i]
        if(!tMap[char]) {
            tMap[char] = s[i]
        }

        if(tMap[char] && tMap[char] !== s[i]) return false
    }
    return true
};