/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let sCharFreq = {}
    let targetCharFreq = {}

    for(let char of s) {
        sCharFreq[char] = sCharFreq[char] ? sCharFreq[char] + 1 : 1
    }

    for(let char of target) {
        targetCharFreq[char] = targetCharFreq[char] ? targetCharFreq[char] + 1 : 1
    }

    let maxCopies = Infinity

    for(let char of target) {
        if(sCharFreq[char]) {
            maxCopies = Math.min(maxCopies, Math.floor(sCharFreq[char] / targetCharFreq[char]))
        } else {
            return 0
        }
    }
    return maxCopies
};