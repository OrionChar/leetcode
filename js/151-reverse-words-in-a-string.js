/**
 * 
 * @param {string} s 
 * @returns 
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/g).reverse().join(' ')
};

console.log(reverseWords())