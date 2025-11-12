/**
 * @param {number[]} nums
 * @return {number}
 */
export default function removeDuplicates(nums) {
    let countDuplicates = 0
    let duplicateRangeStart = null
    let duplicateRangeEng = null

    for (let i = 2; i < nums.length && nums.length > 2; i++) {
        const number = nums[i];
        const isDuplicate = nums[i - 1] === number && nums[i - 2] === number

        if (isDuplicate && !duplicateRangeStart && !duplicateRangeEng) {
            duplicateRangeStart = i
            duplicateRangeEng = i
        } else if (isDuplicate) {
            duplicateRangeEng = i
        }
        
        if ((!isDuplicate || i === nums.length - 1) && duplicateRangeStart && duplicateRangeEng) {
            countDuplicates += duplicateRangeEng - duplicateRangeStart  + 1

            for (let j = duplicateRangeStart; j <= duplicateRangeEng; j++) {
                nums[j] = Infinity
            }

            duplicateRangeStart = duplicateRangeEng = null;
        }
    }

    nums.sort((a, b) => {
        return a === null || b === null ? -Infinity : a - b
    })

    return nums.length - countDuplicates
}
