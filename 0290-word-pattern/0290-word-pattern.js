/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ')

    if(pattern.length !== words.length) return false

    let pMap = new Map()
    let sMap = new Map()

    for(let i = 0; i < pattern.length; i++) {
        let pChar = pattern[i], wChar = words[i]

        if(pMap.has(pChar) && pMap.get(pChar) !== wChar || sMap.has(wChar) && sMap.get(wChar) !== pChar) return false

        pMap.set(pChar, wChar)
        sMap.set(wChar, pChar)

    }
    return true
};