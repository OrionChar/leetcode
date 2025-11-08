/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        const result = []

        obj.forEach(element => {
            if (element instanceof Object) result.push(compactObject(element))
            else if (Boolean(element)) result.push(element)
        })

        return result
    } else {
        const result = {}

        for (const key in obj) {
            if (!Object.hasOwn(obj, key)) continue;
            const element = obj[key];

            if (element instanceof Object) result[key] = compactObject(element)
            else if (Boolean(element)) result[key] = element
        }

        return result
    }
};