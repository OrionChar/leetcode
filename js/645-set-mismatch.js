/**
 * @param {number[]} nums
 * @return {number[]}
 */
export default function findErrorNums(nums) {
    const acceptedWeight = (2 + (nums.length - 1)) / 2 * nums.length
    let actualWeight = 0
    let duplicate = null

    nums.sort((a, b) => a - b)

    for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index];
        const nextNumber = nums[index + 1];
        actualWeight += currentNumber

        if (currentNumber === nextNumber) {
            duplicate = currentNumber
        }
    }

    let replacementNumber =  acceptedWeight - (actualWeight - duplicate)

    return [duplicate, replacementNumber]
};
