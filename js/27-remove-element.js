/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export default function removeElement(nums, val) {
    let countDeletedElements = 0
    const indexesOfGaps = []

    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        
        if (val === number) {
            countDeletedElements++
            indexesOfGaps.push(i)
        }
    }

    for (let i = nums.length - 1; indexesOfGaps.length > 0 && i >= 0; i--) {
        const number = nums[i];

        if (number !== val) {
            const gapIndex = indexesOfGaps.shift()
            nums[gapIndex] = number
        }
    }

    return nums.length - countDeletedElements
};
