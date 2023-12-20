const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = String(n).split("");

  const deletOnIndexAndReturnNumber = (dgs, i) => {
    return Number(
      dgs
        .slice(0, i)
        .concat(dgs.slice(i + 1))
        .join("")
    );
  };

  return Math.max(
    ...digits.map((_, i, arr) => deletOnIndexAndReturnNumber(arr, i))
  );
}

module.exports = {
  deleteDigit,
};
