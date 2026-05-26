/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let set = new Set(s)

    for(let i = 90; i >= 65; i--) {
        const upperCase = String.fromCharCode(i)
        const lowerCase = upperCase.toLowerCase()

        if(set.has(upperCase) && set.has(lowerCase)) return upperCase
    }

    return ""
};