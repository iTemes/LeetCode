const nums = [1, 1, 0, 1, 1, 1];
const nums2 = [1, 0, 1, 1, 0, 1];
const nums3 = [1];
const nums4 = [0];
const nums5 = [];
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  let maxConsecut = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current += 1;
    } else {
      maxConsecut = Math.max(current, maxConsecut);
      current = 0;
    }
  }
  console.log("ans", Math.max(current, maxConsecut));
  return Math.max(current, maxConsecut);
};

findMaxConsecutiveOnes(nums);
findMaxConsecutiveOnes(nums2);
findMaxConsecutiveOnes(nums3);
findMaxConsecutiveOnes(nums4);
findMaxConsecutiveOnes(nums5);
