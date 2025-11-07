/**
 * @param {function(): Promise<unknown>} fn
 * @param {number} t
 * @return {Function}
 */
export default function timeLimit(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => reject('Time Limit Exceeded'), t)
            fn(...args)
            .then((value) => {
                clearTimeout(timeoutId)
                resolve(value)
            })
            .catch(reason => reject(reason))
        })
    }
};
