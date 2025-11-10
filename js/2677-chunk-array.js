/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  const chunkedArray = new Array();

  for (let i = 0; i < arr.length; ) {
    chunkedArray.push(arr.slice(i, i + size));
    i += size;
  }

  return chunkedArray;
};
