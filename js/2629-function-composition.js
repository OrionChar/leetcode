/**
 * @param {Function[]} functions
 * @return {Function}
 */
export default function compose(functions) {    
    return function(x) {
        let result = x
        for (let index = functions.length - 1; index >= 0; index--) {
            result = functions[index](result);
        }
        return result
    }
};
