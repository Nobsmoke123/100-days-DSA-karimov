/**
 * Sum of Digits
Create a recursive function that computes the sum of the digits of a given non-negative integer. For example, given the input 1234, the function should return 10 (since 1 + 2 + 3 + 4 = 10).

 * Example
 *
 * console.log(sumOfDigits(1234)); // Output: 10
 * console.log(sumOfDigits(0));    // Output: 0
 * console.log(sumOfDigits(9));    // Output: 9
 * console.log(sumOfDigits(4321)); // Output: 10
 *
 */

function sumOfDigits(n) {
  // Base case: if n is 0, return 0
  if (n === 0) {
    return 0;
  }

  // Recursive case: add the last digit to the sum of the remaining digits
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}
