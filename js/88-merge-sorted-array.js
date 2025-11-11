function mergeArrs(array1, m, array2, n) {
    let i = array1.length - 1;
    let indexArray1 = m - 1;
    let indexArray2 = n - 1;

    while (i >= 0 && (indexArray1 >= 0 || indexArray2 >= 0)) {
        const num1 = array1[indexArray1]
        const num2 = array2[indexArray2]
        const isNum1Defined = Number.isInteger(num1)
        const isNum2Defined = Number.isInteger(num2)

        if (isNum1Defined && num1 > num2) {
            array1[i] = num1;
            indexArray1--;
        } else if (num1 === num2 && isNum1Defined && isNum2Defined) {
            array1[i] = num1;
            indexArray1--; i--;
            array1[i] = num2;
            indexArray2--;
        } else if (isNum2Defined) {
            array1[i] = num2;
            indexArray2--;
        }
        i--; 
    }
}


let nums1 = [0,0,3,0,0,0,0,0,0]
let nums2 = [-1,1,1,1,2,3]

mergeArrs(nums1, 3, nums2, 6);


console.log(nums1);
