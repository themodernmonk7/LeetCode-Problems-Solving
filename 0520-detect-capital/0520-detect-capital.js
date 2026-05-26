/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
      let capitalCount = 0;

  for (let char of word) {
    if (char >= 'A' && char <= 'Z') {
      capitalCount++;
    }
  }

  if (capitalCount === word.length) return true;

  if (capitalCount === 0) return true;

  if (capitalCount === 1 && word[0] >= 'A' && word[0] <= 'Z') return true;
  return false;
};