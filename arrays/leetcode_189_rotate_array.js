/*
LeetCode 189 - Rotate Array
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
 
Output: [5,6,7,1,2,3,4]
 
Explanation:

rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
 
Output: [3,99,-1,-100]
 
Explanation:

rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

function rotateArray(arr, k) {
  //   0 1 2 3 4 5 6   k = 3
  // [1,2,3,4,5,6,7] length = 7
  // [5,6,7,1,2,3,4]

  //   0 1 2 3 4 5 6   k = 10
  // [1,2,3,4,5,6,7] length = 7
  // [5,6,7,1,2,3,4]
  if (arr.length === 0) return arr;
  k = k % arr.length; // Handle cases where k is greater than array length
  return arr.slice(arr.length - k).concat(arr.slice(0, arr.length - k));
  //   arr.splice(0, arr.length, ...result);
  //   console.log(arr);
  //   return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3, 4, 5], 7));
