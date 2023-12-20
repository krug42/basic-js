const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let transformedArr = Array.from(arr);

  for (let i = 0; i < transformedArr.length; i++) {
    if (!transformedArr[i]) continue;
    switch (transformedArr[i]) {
      case "--discard-next":
        if (transformedArr[i + 1]) transformedArr[i + 1] = null;
        transformedArr[i] = null;
        break;
      case "--discard-prev":
        if (transformedArr[i - 1]) transformedArr[i - 1] = null;
        transformedArr[i] = null;
        break;
      case "--double-next":
        if (transformedArr[i + 1]) transformedArr[i] = transformedArr[i + 1];
        else transformedArr[i] = null;
        break;
      case "--double-prev":
        if (transformedArr[i - 1]) transformedArr[i] = transformedArr[i - 1];
        else transformedArr[i] = null;
        break;
    }
  }

  return transformedArr.filter((val) => val !== null);
}

module.exports = {
  transform,
};
