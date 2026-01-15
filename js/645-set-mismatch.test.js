import findErrorNums from "./645-set-mismatch";
import { test, expect } from "vitest";

test('', () => {
    expect(findErrorNums([2,1,2,4])).toEqual([2,3])
    expect(findErrorNums([1,1])).toEqual([1,2])
    expect(findErrorNums([1,2,3,4,5,6,5,8])).toEqual([5,7])
    expect(findErrorNums([1,2,2])).toEqual([2,3])
    expect(findErrorNums([1,2,3,2])).toEqual([2,4])
    expect(findErrorNums([2,2])).toEqual([2,1])
})
