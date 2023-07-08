/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
//     Check if the string length is same or not
    if(s.lenght !== t.lenght) return false
    return s.split('').sort().join("") === t.split('').sort().join("")
};