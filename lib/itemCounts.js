/**
 * collaborators: @LilianKorir @rachel-mclean @jfarmer @HuseyinAltnsk
 *
 * Given an input Array, returns an object containing the count of each item in the input.
 *
 * @param {Array} array - The array of items to count
 * @returns {object} An object containing the counts of the items in the input array
 */

function itemCounts(array) {
  let counts = {};

  for (let i = 0; i < array.length; i++) {
    if (counts[array[i]] === undefined) {
      counts[array[i]] = 1;
      // console.log(counts);
    } else {
      counts[array[i]]++;
      // console.log(counts)
    }
  }
  return counts;
}

module.exports = itemCounts;
