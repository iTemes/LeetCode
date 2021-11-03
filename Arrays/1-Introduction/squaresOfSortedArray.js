const nums = [-4,-1,0,3,10];
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
    return nums.map(item => item ** 2).sort((a,b) => a - b);
};

sortedSquares(nums);