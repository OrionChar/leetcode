/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
export default function filter(arr, fn) {
    const filteredValues = new Array()

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) filteredValues.push(arr[i])
    }

    return filteredValues
};