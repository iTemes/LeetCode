const nums = [12, 345, 2, 6, 7896];
const nums2 = [555,901,482,1771];
const nums3 = [100000];
/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function(nums) {
    let evenCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if(countDigits(nums[i]) % 2 === 0) evenCount += 1;
    }
    console.log('evenCount', evenCount);
    return evenCount;
};
const countDigits = function(n) {
    for(var i = 0; n >= 1; i++) {
       n /= 10;
    }
    return i;
}

findNumbers(nums);
findNumbers(nums2);
findNumbers(nums3);