/**
 *
 * Power Function
 * Write a recursive function power(base, exp) that computes the result of raising base to the power of exp.
 *
 * base and exp are positive integers.
 *
 * For example:
 *
 * power(2, 3) should return 8
 *
 * power(5, 0) should return 1
 */

function power(base, exp) {
  // Base case: any number raised to the power of 0 is 1
  if (exp === 0) {
    return 1;
  }

  // Recursive case: base raised to the power of exp is base multiplied by base raised to the power of exp - 1
  return base * power(base, exp - 1);
}
