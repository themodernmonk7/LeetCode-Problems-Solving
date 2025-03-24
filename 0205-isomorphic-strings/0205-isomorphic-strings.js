/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    if(s.length !== t.length) return false

    let sMap = new Map()
    let tMap = new Map()


    for(let i = 0; i < s.length; i++) {
        const char = s[i]
        if(!sMap.has(char)) {
            sMap.set(char, t[i] )
        }

        if(sMap.has(char) && sMap.get(char) !== t[i]) return false
    }

    for(let i = 0; i < t.length; i++) {
        const char = t[i]
        if(!tMap.has(char)) {
            tMap.set(char, s[i])
        }
        if(tMap.has(char) && tMap.get(char) !== s[i]) return false
    }


    return true
};