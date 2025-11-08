/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
export default function flat(arr, n) {
    let flattedArray = new Array()

    arr.forEach(element => {
        if (Array.isArray(element) && n > 0) {
            flattedArray.push(...flat(element, n - 1))
        } else {
            flattedArray.push(element)
        }
    })

    return flattedArray
};