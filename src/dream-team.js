const { NotImplementedError } = require('../extensions/index.js');

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
  cool_name = [];

  if (!Array.isArray(members)) {
    return false;
  }

  for (let i of members) {
    if (typeof i === 'string') {
      cool_name.push(i.trim()[0].toUpperCase());
    }
  }

  if (cool_name.length > 0) {
    sorted = cool_name.sort();
    return sorted.join('');
  } else {
      return false;
  }

}

module.exports = {
  createDreamTeam
};
