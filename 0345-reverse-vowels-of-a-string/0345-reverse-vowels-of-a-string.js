/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const arr = s.split('')
    let left = 0
    let right = arr.length - 1
    const vowels = new Set('aeiouAEIOU')

    while(left < right) {
        while(left < right && !vowels.has(arr[left])) left++
        while(left < right && !vowels.has(arr[right])) right--
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }

    return arr.join('')
};