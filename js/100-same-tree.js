/**
 * @typedef {Object} TreeNode
 * @property {number} val - The person's name.
 * @property {TreeNode | null} left - The person's age.
 * @property {TreeNode | null} right - Optional nickname.
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
export default function isSameTree(p, q) {
    if (p === null && q ===null) {
        return true
    } else if (xor(p === null, q === null)) {
        return false
    } else if (xor(p.left === null, q.left === null)) {
        return false
    } else if (xor(p.right === null, q.right === null)) {
        return false
    }

    let areValuesQuel = p.val === q.val

    if (p.left !== null && q.left !== null) {
        areValuesQuel &&= isSameTree(p.left, q.left)
    }

    if (p.right !== null && q.right !== null) {
        areValuesQuel &&= isSameTree(p.right, q.right)
    }

    return areValuesQuel
};

const xor = (a, b) => (a || b) && !(a && b);

