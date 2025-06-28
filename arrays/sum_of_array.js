// Sum of Array Elements
// Write a function sumArray that takes an array of numbers and returns the sum of all elements.
//
// Example: sumArray([5, 10, 15]) should return 30.
//
// Hint: Use a loop to accumulate the sum or try JavaScript's reduce method.

/**
 ‘* Returns the sum of all elements in the array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} Sum of the array elements.
 */

// function sumArray(arr) {
//   return arr.reduce((acc, curr) => curr + acc, 0);
// }

/**
 * Returns the sum of all elements in the array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} Sum of the array elements.
 */

function sumArray(arr) {
  return arr.reduce((acc, curr) => curr + acc, 0);
}
