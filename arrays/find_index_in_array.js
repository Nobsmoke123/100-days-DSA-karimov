/**
 * findIndex
Write a function findIndex that takes a sorted array of integers and a target value. The function should return the index of the target value if it exists in the array, otherwise return -1.

Example Input/Output:

findIndex([1, 3, 5, 7, 9], 5) // Output: 2
findIndex([1, 3, 5, 7, 9], 8) // Output: -1
 */

function findIndex(arr, target) {
   // [1,3,4,7,9] target = 5
   // mid = 2
   // left = 0 // left = 2+1
   // right = 4
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
