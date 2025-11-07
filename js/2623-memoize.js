/**
 * 
 * @param {Function} fn 
 * @returns 
 */
export default function memoize(fn) {
    const historyCalls = {}

    return function(...args) {
        const key = JSON.stringify(args)
        if (Object.hasOwn(historyCalls, key)) {
            return historyCalls[key]
        } 

        historyCalls[key] = fn(...args)
        return historyCalls[key]
    }
}

