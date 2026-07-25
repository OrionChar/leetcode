/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
export default function convert(s, numRows) {
    if (numRows === 1) return s

    /**
     * @type {string[][]}
     */
    let arrays = new Array(numRows).fill().map(() => [])
    let isDown = true

    for (let stringIndex = 0, rowIndex = 0, colIndex = 0; stringIndex < s.length; stringIndex++) {
        const char = s[stringIndex];

        if (isDown) {
            arrays[rowIndex][colIndex] = char
            rowIndex++
        } else {
            rowIndex--
            arrays[rowIndex][colIndex] = char

            if (rowIndex > 0) colIndex++
        }

        if (rowIndex === numRows || rowIndex === 0) {
            isDown = !isDown;

            if (!isDown) {
                colIndex++;
                rowIndex--;
            } else {
                rowIndex++;
            }
        }
    }

    return arrays.map(arr => arr.join('')).join('')
};

const x = convert('PAYPALISHIRING', 4)
console.log(x)


