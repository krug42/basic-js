const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let result = [];
  let prev = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      result.push({ value: arr[i], counter: 1 });
    } else {
      result[result.length - 1].counter += 1;
    }
    prev = arr[i];
  }

  return result.reduce(
    (acc, cur) => acc + (cur.counter === 1 ? "" : cur.counter) + cur.value,
    ""
  );
}

module.exports = {
  encodeLine,
};
