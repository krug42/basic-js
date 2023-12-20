const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split("");
  let s2Arr = s2.split("");
  let counter = 0;

  s1Arr.forEach((char) => {
    const intersectionIndex = s2Arr.findIndex((item) => item === char);
    if (intersectionIndex !== -1) {
      s2Arr = s2Arr
        .slice(0, intersectionIndex)
        .concat(s2Arr.slice(intersectionIndex + 1));
      counter += 1;
    }
  });

  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
