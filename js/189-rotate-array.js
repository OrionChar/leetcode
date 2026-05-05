/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export function rotateArray(nums, k) {
    if (k > nums.length) {
        k = k % nums.length
    }

    revers(nums)
    revers(nums, 0, k - 1)
    revers(nums, k)
};

/**
 * 
 * @param {Array<number>} array 
 * @param {number | null} startIndex 
 * @param {number | null} endIndex 
 */
export function revers(array, startIndex = null, endIndex = null) {
    if (startIndex === null) {
        startIndex = 0
    }

    if (endIndex === null) {
        endIndex = array.length - 1
    }

    const arrayCenter = Math.floor((startIndex + endIndex + 1) / 2)

    for (let i = startIndex, j = endIndex; i < arrayCenter; i++, j--) {
        const tempValue = array[i];
        array[i] = array[j]
        array[j] = tempValue
    }

}
