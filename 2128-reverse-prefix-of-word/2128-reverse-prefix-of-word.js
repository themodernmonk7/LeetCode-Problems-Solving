/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let arr = word.split('')
    let left = 0
    let right = word.indexOf(ch)

    if(right === -1) return word

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr.join('')
};