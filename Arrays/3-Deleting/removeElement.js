/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  // return nums.filter((element) => element !== val);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

const nums = [3, 2, 2, 3];
const val = 3;

console.log("removeElement-", removeElement(nums, val));
console.log("nums", nums);
