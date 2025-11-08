/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
export default function join(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2].sort((a, b) =>  a.id - b.id);
    const joinedArray = new Array()
    
    for (let i = 0; i < mergedArray.length;) {
        let j = 1
        const joinedObject = mergedArray[i]

        while (mergedArray[i + j] && mergedArray[i].id === mergedArray[i + j].id) {
            for (const key in mergedArray[i+j]) {
                if (!Object.hasOwn(mergedArray[i+j], key)) continue;
                const element = mergedArray[i+j][key];               
                joinedObject[key] = element
            }
            j++
        }

        i += j
        joinedArray.push(joinedObject)
    }

    return joinedArray
};