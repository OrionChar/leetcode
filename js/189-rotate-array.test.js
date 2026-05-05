import { test, expect } from "vitest";
import {rotateArray, revers} from "./189-rotate-array";

test('Revers whole array', () => {
    const arr1 = [1,2,3,4]
    revers(arr1);
    expect(arr1).toEqual([4,3,2,1])

    const arr2 = [1,2,3,4,5]
    revers(arr2);
    expect(arr2).toEqual([5,4,3,2,1])
})

test('Revers left side of array', () => {
    const arr1 = [1,2,3,4]
    revers(arr1, 0, 1);
    expect(arr1).toEqual([2,1,3,4])

    const arr2 = [1,2,3,4]
    revers(arr2, 0, 2);
    expect(arr2).toEqual([3,2,1,4])

    const arr3 = [1,2,3,4, 5, 6, 7]
    revers(arr3, 0, 5);
    expect(arr3).toEqual([6,5,4,3,2,1,7])
})

test('Revers right side of array', () => {
    const arr1 = [1,2,3,4]
    revers(arr1, 2);
    expect(arr1).toEqual([1,2,4,3])

    const arr2 = [1,2,3,4]
    revers(arr2, 2, 3);
    expect(arr2).toEqual([1,2,4,3])

    const arr3 = [1,2,3,4,5,6,7]
    revers(arr3, 4, 6);
    expect(arr3).toEqual([1,2,3,4,7,6,5])
})

test('Test rotateArray', () => {
    const arr1 = [1,2,3,4,5,6,7]
    rotateArray(arr1, 3)
    expect(arr1).toEqual([5,6,7,1,2,3,4])

    const arr2 = [1,2,3,4,5,6,7, 8, 9, 10, 11, 12]
    rotateArray(arr2, 3)
    expect(arr2).toEqual([10, 11, 12,1,2,3,4,5,6,7, 8, 9])

    const arr3 = [-1,-100,3,99];
    rotateArray(arr3, 2)
    expect(arr3).toEqual([3,99,-1,-100])

    const arr4 = [1]
    rotateArray(arr4, 0)
    expect(arr4).toEqual([1])

    const arr5 = [1,2]
    rotateArray(arr5, 7)
    expect(arr5).toEqual([2, 1])
    
    const arr6 = [1, 2, 3]
    rotateArray(arr6, 8)
    expect(arr6).toEqual([2, 3, 1])

    const arr7 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
    rotateArray(arr7, 38)
    expect(arr7).toEqual([17,18,19,20,21,22,23,24,25,26,27,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])

    const arr8 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
    rotateArray(arr8, 7)
    expect(arr8).toEqual([21,22,23,24,25,26,27, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19, 20])

    const arr9 = [1,2,3,4,5,6]
    rotateArray(arr9, 4)
    expect(arr9).toEqual([3,4,5,6,1,2])

    const arr10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    rotateArray(arr10, 29);
    expect(arr10).toEqual([14,15,16,17,18,19,20,21,1,2,3,4,5,6,7,8,9,10,11,12,13])    
});