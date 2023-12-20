const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const digits = String(n).split("");

  for (let i = 0; i < digits.length; i++) {
    const sumFromCurrentIndex = digits
      .slice(i)
      .reduce((acc, cur) => acc + Number(cur), 0);
    if (sumFromCurrentIndex < 10) return sumFromCurrentIndex;
  }
}

module.exports = {
  getSumOfDigits,
};
