/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if(!s || typeof s !== 'string') {
        throw new TypeError(`${s} must be a string`)
    }

    let result = ''
    let word = ''
    let i = s.length - 1

    while(i >= 0) {
        if(s[i] !== " ") {
            word = s[i] + word
        } else if(word.length > 0) {
            result += (result ? " " : "") + word
            word = ""
        }
        i--
    }

    if(word.length > 0) {
        result += (result ? " " : "") + word
    }


    return result
};