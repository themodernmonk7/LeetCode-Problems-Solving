/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    
    let charFreq = {}
    let word = 'balloon'
    let wordFreq = {}

    for(let char of text) {
        charFreq[char] = charFreq[char] ? charFreq[char] + 1 : 1
    }

    for(let char of word) {
        wordFreq[char] = wordFreq[char] ? wordFreq[char] + 1 : 1
    }

    let textInstance = Infinity

    for(let char of word) {
        if(charFreq[char]) {
            textInstance = Math.min(textInstance, Math.floor(charFreq[char] / wordFreq[char]))
        } else {
            return 0
        }
    }

    return textInstance

};