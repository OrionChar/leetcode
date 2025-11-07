import { test, expect } from "vitest";
import reduce from "./2626-array-reduce-transformation";

test('', () => {
    expect(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; })).toBe(10)
    expect(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100)).toBe(130)
    expect(reduce([], function sum(accum, curr) { return 0; }, 25)).toBe(25)
})