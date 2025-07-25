```
LeetCode 1 - Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
```;

// Inefficient solution with O(n^2) time complexity
// This solution uses a nested loop to check every pair of numbers in the array.
// It is not optimal for large arrays, but it is straightforward and easy to understand.
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
  return [];
}

function twoSumOptimized(arr, target) {
  // This solution uses a hash map to store the indices of the numbers we have seen so far.
  // It allows us to find the complement (target - current number) in O(1) time.
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map.has(complement)) return [map.get(complement), i];

    map.set(arr[i], i);
  }

  return [];
}
