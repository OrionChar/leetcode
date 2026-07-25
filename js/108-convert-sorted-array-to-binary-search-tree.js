/**
 * @typedef {Object} TreeNode
 * @property {number} val - The person's name.
 * @property {TreeNode | null} left - The person's age.
 * @property {TreeNode | null} right - Optional nickname.
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export default function sortedArrayToBST(nums) {
    if (nums.length === 0) {
        return null
    }

    if (nums.length === 1) {
        return {
            left: null,
            right: null,
            val: nums[0]
        }
    }

    const indexOfMiddleLement = Math.floor(nums.length / 2)

    return {
        left: sortedArrayToBST(nums.slice(0, indexOfMiddleLement)),
        right: sortedArrayToBST(nums.slice(indexOfMiddleLement + 1)),
        val: nums[indexOfMiddleLement]
    }
};
