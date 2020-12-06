// 'use strict';

const findLongestWord = function (string) {
  const wordsArray = string.split(' ');
  let longestWord = wordsArray[0];

  for (let i = 1; i < wordsArray.length; i += 1) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'