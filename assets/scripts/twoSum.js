/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const arr = [];
  for (let n = 0; n < nums.length; n++) {
    for (let i = n + 1; i < nums.length; i++) {
      if (nums[n] + nums[i] === target) {
        arr.push(n, i);
        return arr;
      }
    }
  }
  return arr;
}

console.log(twoSum([1, 2, 3, 4, 5], 9));

