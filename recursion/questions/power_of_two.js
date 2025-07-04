/**
 * Power of Two (LeetCode 231)
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 *
 * An integer n is a power of two, if there exists an integer x such that n == 2x.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 1
 * Output: true
 * Explanation: 20 = 1
 * Example 2:
 *
 * Input: n = 16
 * Output: true
 * Explanation: 24 = 16
 * Example 3:
 *
 * Input: n = 3
 * Output: false
 */

function isPowerOfTwo(n) {
  // Base case: if n is less than or equal to 0, it cannot be a power of two
  if (n <= 0) return false;

  // If n is 1, it is a power of two (2^0)
  if (n === 1) return true;

  // Recursive case: check if n is divisible by 2 and call the function with n divided by 2
  return n % 2 === 0 && isPowerOfTwo(n / 2);
}
