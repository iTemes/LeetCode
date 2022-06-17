/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  let writePointer = 1;
  for (let readPointer = 1; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] != nums[readPointer - 1]) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
    console.log(nums);
  }
  nums.length = writePointer;
  return writePointer;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; //5

// console.log("remove-", removeDuplicates(nums));
// console.log("remove-", removeDuplicates(nums));
console.log("remove pointers", removeDuplicates(nums));
console.log("nums", nums);
