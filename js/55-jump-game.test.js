import { test, describe, expect, it } from "vitest";
import canJump from "./55-jump-game";

test('Jump Game Random', () => {
    expect(canJump([5,9,3,2,1,0,2,3,3,1,0,0])).toEqual(true)

    expect(canJump([2, 3, 1, 1, 4])).toEqual(true)

    expect(canJump([3, 2, 1, 0, 4])).toEqual(false)

    expect(canJump([0])).toEqual(true)

    expect(canJump([0, 5])).toEqual(false)

    expect(canJump([1, 0, 0])).toEqual(false)

    expect(canJump([2, 0, 0])).toEqual(true)

    expect(canJump([2, 0, 1, 0])).toEqual(true)

    expect(canJump([1, 0, 1])).toEqual(false)

    expect(canJump([1,1,2,2,0,1,1])).toEqual(true)

    expect(canJump([1,3,0,2,0,1,1])).toEqual(true)

    expect(canJump([10,3,0,2,0,1,1])).toEqual(true)
})


describe('Jump Game', () => {
    // LeetCode Provided Examples
    it('should return true for Example 1: [2, 3, 1, 1, 4]', () => {
        expect(canJump([2, 3, 1, 1, 4])).toBe(true);
    });

    it('should return false for Example 2: [3, 2, 1, 0, 4]', () => {
        expect(canJump([3, 2, 1, 0, 4])).toBe(false);
    });

    // Edge Cases
    it('should return true for a single element array', () => {
        expect(canJump([0])).toBe(true);
        expect(canJump([5])).toBe(true);
    });

    it('should handle zero elements at the start appropriately', () => {
        // If length > 1 and first element is 0, we can never move forward
        expect(canJump([0, 1])).toBe(false);
    });

    it('should return true when zero is at the last index', () => {
        expect(canJump([2, 0, 0])).toBe(true);
    });

    // Additional Scenarios
    it('should return true when there are exact jumps available to bypass zeros', () => {
        expect(canJump([2, 5, 0, 0, 0, 0, 4])).toBe(true);
    });

    it('should return false if stranded right before the last index', () => {
        expect(canJump([1, 0, 2])).toBe(false);
    });

    // Large Inputs / Performance Test
    it('should handle large arrays efficiently without timing out', () => {
        const largeArray = Array(10000).fill(1);
        expect(canJump(largeArray)).toBe(true);
    });
});