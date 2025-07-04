/**
 * Fibonacci
 * The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, typically starting with 0 and 1. In mathematical terms, the sequence is defined as:
 *
 * F(0) = 0
 *
 * F(1) = 1
 *
 * F(n) = F(n-1) + F(n-2) for n > 1
 *
 * Implement a recursive function in JavaScript that returns the nth Fibonacci number.
 */

function fibonacci(n) {
  // Base cases
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}
