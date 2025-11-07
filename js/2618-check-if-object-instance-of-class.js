/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
export default function checkIfInstanceOf(obj, classFunction) {
    try {
        const prototypeObObject = Object.getPrototypeOf(obj)

        if (!classFunction || prototypeObObject === null) return false

        if (prototypeObObject === classFunction.prototype) {
            return prototypeObObject === classFunction.prototype
        }

        return checkIfInstanceOf(obj.__proto__, classFunction)
    }
    catch {
        return false
    }
};
