/**
 * @param {string} title
 * @return {string}
 */
const toLowercase = (char) => {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return String.fromCharCode(char.charCodeAt(0) + 32);
  }
  return char;
};

const toCapital = (char) => {
  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    return String.fromCharCode(char.charCodeAt(0) - 32);
  }
  return char;
};

var capitalizeTitle = function(title) {
  let words = title.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length <= 2) {
      words[i] = word.toLowerCase();
    } else {
      let newWord = '';
      for (let j = 0; j < word.length; j++) {
        if (j === 0) {
          newWord += toCapital(word[j]);
        } else {
          newWord += toLowercase(word[j]);
        }
      }
      words[i] = newWord;
    }
  }

  return words.join(' ');
};