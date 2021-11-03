const  arr = [1,0,2,3,0,4,5,0];

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

const duplicateZeros = (arr) => {
    const arrLength = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0 , 0);
            i++;
        }
    }
    arr.length = arrLength;
};

duplicateZeros(arr);

console.log('arr', arr);