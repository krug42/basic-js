const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  arr = arr.map((item) => (item === -1 ? Infinity : item));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Infinity) continue;
    const nextMin = Math.min(...arr.slice(i + 1));
    if (arr[i] < nextMin) continue;
    const nextMinIndex = arr.slice(i).findIndex((cur) => cur === nextMin) + i;
    [arr[i], arr[nextMinIndex]] = [arr[nextMinIndex], arr[i]];
  }

  return arr.map((item) => (item === Infinity ? -1 : item));
}

module.exports = {
  sortByHeight,
};
