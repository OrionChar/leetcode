import { test, expect } from "vitest";
import removeElement from "./27-remove-element";

test('', () => {
    const arr1 = [3,2,2,3];
    expect(removeElement(arr1, 3)).toBe(2)
    console.log(arr1)

    const arr2 = [0,1,2,2,3,0,4,2];
    expect(removeElement(arr2, 2)).toBe(5)
    console.log(arr2);
})