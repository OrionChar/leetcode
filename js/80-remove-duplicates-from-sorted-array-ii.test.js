import { test, expect } from "vitest";
import removeDuplicates from "./80-remove-duplicates-from-sorted-array-ii";

test('', () => {
    const arr1 = [1,1,1,2,2,3];
    expect(removeDuplicates(arr1)).toBe(5)
    console.log(arr1);

    const arr2 = [0,0,1,1,1,1,2,3,3];
    expect(removeDuplicates(arr2)).toBe(7)
    console.log(arr2);

    const arr3 = [0,1,2,2,2];
    expect(removeDuplicates(arr3)).toBe(4)
    console.log(arr3);

    const arr4 = [0,1,2,2,2,2,3,3,4,65,77,77,77,77,77,77,78,79,99,99];
    expect(removeDuplicates(arr4)).toBe(14)
    console.log(arr4);

    const arr5 = [0,0,0,0,1,2,2,2,2];
    expect(removeDuplicates(arr5)).toBe(5)
    console.log(arr5);

    const arr6 = [0,1,2];
    expect(removeDuplicates(arr6)).toBe(3)
    console.log(arr6);
    
    const arr7 = [0,0,0,0,0,1,2,2,3,3,4,4]
    expect(removeDuplicates(arr7)).toBe([0,0,1,2,2,3,3,4,4].length)
    console.log(arr7);
})