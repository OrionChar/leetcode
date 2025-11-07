import { expect, test } from 'vitest'
import filter from './2634-filter-elements-from-array'

test('', () => {
    expect(filter([0,10,20,30], function greaterThan10(n) { return n > 10; })).toEqual([20,30])
    expect(filter([1,2,3], function firstIndex(n, i) { return i === 0; })).toEqual([1])
    expect(filter([-2,-1,0,1,2], function plusOne(n) { return n + 1 })).toEqual([-2,0,1,2])
})

