/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
   let maxCount = 0;
  
  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i].split(" ");
    const wordCount = words.length;
    
    if (wordCount > maxCount) {
      maxCount = wordCount;
    }
  }
  
  return maxCount;
};