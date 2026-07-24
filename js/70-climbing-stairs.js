/**
 * @param {number} n
 * @return {number}
 */

const values = new Array(45).fill(0)

export default function climbStairs(n) {
    if (n > 0) {
        const index = n - 1

        if (n > 2) {
            values[index] = climbStairs(n - 1) + values[index - 2]
            return values[index]
        }

        if (n === 1) {
            values[index] = 1
        } else if (n === 2) {
            values[index] = 2
            climbStairs(n - 1)
        }

        return values[index]
    }

    return 0
};

console.log(climbStairs(5))
