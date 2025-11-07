/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
export default function reduce(nums, fn, init) {
    let value = init | 0

    for (let index = 0; index < nums.length; index++) {
        value = fn(value, nums[index]);
    }

    return value
};