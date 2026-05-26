/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
      const set = new Set(word);
  let count = 0;
  for (let i = 0; i < 26; i++) {
    const lowerCase = String.fromCharCode(97 + i);
    const upperCase = String.fromCharCode(65 + i);

    if (set.has(upperCase) && set.has(lowerCase)) {
      count++;
    }
  }

  return count;
};