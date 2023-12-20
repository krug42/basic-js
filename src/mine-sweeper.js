const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  const calcMines = (desiredI, desiredJ) => {
    let counter = 0;
    for (let i = desiredI - 1; i <= desiredI + 1; i++) {
      for (let j = desiredJ - 1; j <= desiredJ + 1; j++) {
        if (i === desiredI && j === desiredJ) continue;
        if (matrix[i] && matrix[i][j]) counter += 1;
      }
    }
    return counter;
  };

  for (let i = 0; i < matrix.length; i++) {
    result[i] = result[i] ? result[i] : [];
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = calcMines(i, j);
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
