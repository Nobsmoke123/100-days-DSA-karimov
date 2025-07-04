/**
 * Reverse a String
 * Write a recursive function reverseString(s) that takes a string s as input and returns the reversed string.
 * For example:
 * reverseString("hello") should return "olleh".
 *
 * reverseString("recursion") should return "noisrucer".
 */
function reverseString(s) {
  // Base case: if the string is empty, return an empty string
  if (s === "") {
    return "";
  }

  // Recursive case: take the last character and append it to the reversed substring
  return s.charAt(s.length - 1) + reverseString(s.slice(0, -1));
}
