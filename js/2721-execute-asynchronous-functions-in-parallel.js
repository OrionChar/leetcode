/**
 * @see https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
 * @param {Array<() => Promise>} functions
 * @return {Promise<any>}
 */
export default function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length)
        let countFunctionsAreExecuting = functions.length
    
        functions.forEach((callableFunction, index) => {
            callableFunction()
                .then((value) => {
                    results[index] = value
                    const isComplete = --countFunctionsAreExecuting === 0
                    if (isComplete) resolve(results)
                })
                .catch((reason) => reject(reason))
        })
    })
};
