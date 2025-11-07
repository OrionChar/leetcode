import promiseAll from "./2721-execute-asynchronous-functions-in-parallel.js";
import { expect, test } from 'vitest'

test('Should return array of result of all promises', () => {
    promiseAll([() => new Promise(resolve => setTimeout(() => resolve(5), 200))])
        .then((value) => expect(value).toEqual([5]));

    promiseAll([
        () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
        () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
        () => new Promise(resolve => setTimeout(() => resolve(16), 100))
    ]).then((value) => expect(value).contain([4, 10, 16]))
});

test('Should return the first reject value', () => {
    promiseAll([
        () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
        () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
    ]).catch(reason => expect(reason).toBe = 'Error')
})
