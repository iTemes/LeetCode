/* 
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.
*/

const arr = [17, 18, 5, 4, 6, 1];
const arr2 = [400];

//Runtime: 224 ms
//Memory Usage: 45.3 MB

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i] = -1;
    } else {
      let maxRight = arr[i + 1];
      let j = i + 1;
      while (j < arr.length) {
        maxRight = Math.max(maxRight, arr[j]);
        j++;
      }

      arr[i] = maxRight;
    }
  }

  return arr;
};

// Runtime: 132 ms
// Memory Usage: 45.6 MB

const replaceElements2 = function (arr) {
  // rightMax last element
  let maxRight = arr[arr.length - 1];

  for (let i = arr.length - 1; i >= 0; i--) {
    //if last change for -1
    if (i === arr.length - 1) {
      arr[i] = -1;
    } else {
      const currentValue = arr[i];
      arr[i] = maxRight;
      maxRight = Math.max(maxRight, currentValue);
    }
  }

  return arr;
};

// console.log(replaceElements(arr));
// console.log(replaceElements(arr2));

console.log(replaceElements2(arr)); //[18,6,6,6,1,-1]
console.log(replaceElements2(arr2));
