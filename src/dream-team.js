const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  let chars = members.map((name) => {
    if (typeof name !== "string") return "";
    let normalizedName = name.trim().toUpperCase();
    return normalizedName[0];
  });

  return chars.sort().join("");
}

module.exports = {
  createDreamTeam,
};
