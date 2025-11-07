import { expect, test } from 'vitest'
import checkIfInstanceOf from './2618-check-if-object-instance-of-class'

test('An instance of an class should be true', () => {
    expect(checkIfInstanceOf(new Date(), Date)).toBe(true)
    expect(checkIfInstanceOf(5, Number)).toBe(true)
    expect(checkIfInstanceOf(Number.NaN, Number)).toBe(true)
    expect(checkIfInstanceOf(null, null)).toBe(false)
    expect(checkIfInstanceOf(undefined, undefined)).toBe(false)
    expect(checkIfInstanceOf(Number.NaN, Number.NaN)).toBe(false)
    expect(checkIfInstanceOf(0, Object)).toBe(true)
})

test('Extended class should be equal to the parent', () => {
    class Animal { }; class Dog extends Animal { };
    expect(checkIfInstanceOf(new Dog(), Animal)).toBe(true)
})

test('Instance of itself can not logically be equal', () => {
    expect(checkIfInstanceOf(Date, Date)).toBe(false)
})