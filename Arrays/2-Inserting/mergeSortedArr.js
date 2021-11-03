let nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Runtime: 76 ms
// Memory Usage: 39.2 MB
const merge = (nums1, m, nums2, n) => {
    nums1.length = m;
    nums2.length = n;
    nums1.splice(m, 0, ...nums2);
    nums1.sort((a, b) => a - b);
};

// Runtime: 72 ms
// Memory Usage: 39.3 MB

const merge2 = (nums1, m, nums2, n) => {
    const arr3 = [];
    let i = 0
    let j = 0
    let k = 0
 
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            arr3[k] = nums1[i]
            k += 1;
            i += 1;
        } else {
            arr3[k] = nums2[j]
            k += 1
            j += 1;
        }
     
    }

    while (i < m) {
        arr3[k] = nums1[i]
        k += 1;
        i += 1;
    }
        
    while (j < n) {
        arr3[k] = nums2[j]
        k += 1
        j += 1;
    }

    nums1.splice(0, nums1.length, ...arr3);
};


// merge(nums1, m, nums2, n);
merge2(nums1, m, nums2, n)
console.log('nums1', nums1);