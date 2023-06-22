/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let count = []
    for(let i = 0; i < sentences.length; i++) {
        const arr = sentences[i].split(" ").length
        count.push(arr)
    }
    return Math.max(...count)
};