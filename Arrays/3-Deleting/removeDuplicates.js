/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 148 ms
// Memory Usage: 42.2 MB
const removeDuplicates = (nums) => {
  if (nums.length < 1) {
    return nums.length;
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

const removeDuplicates2 = (nums) => {
  return new Set(nums).size;
};

//Runtime: 88 ms
//Memory Usage: 40.6 MB
const removeDuplicates3 = (nums) => {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; //5

// console.log("remove-", removeDuplicates(nums));
// console.log("remove-", removeDuplicates2(nums));
console.log("remove pointers", removeDuplicates3(nums));
console.log("nums", nums);
