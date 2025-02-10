/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
let result = "";
  let word = "";
  let i = s.length - 1;

  while (i >= 0) {
    if (s[i] !== " ") {
      word = s[i] + word; // Build the current word
    } else if (word.length > 0) {
      result += (result ? " " : "") + word; // Add the word to the result
      word = ""; // Reset the word
    }
    i--;
  }

  // Add the last word if there is any
  if (word.length > 0) {
    result += (result ? " " : "") + word;
  }

  return result;
};