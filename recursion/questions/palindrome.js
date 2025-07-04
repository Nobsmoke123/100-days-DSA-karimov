/**
 * Check if a String is a Palindrome
 * Write a recursive function isPalindrome(s) that determines whether a given string s is a palindrome. A string is a palindrome if it reads the same backward as forward (ignoring spaces, punctuation, and case sensitivity).
 *
 * Examples:
 *
 * isPalindrome("racecar") → true
 *
 * isPalindrome("hello") → false
 *
 * isPalindrome("A man, a plan, a canal, Panama") → true
 */

function isPalindrome(s) {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const normalizedStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Helper function to check if the string is a palindrome recursively
  function checkPalindrome(left, right) {
    // Base case: if left index is greater than or equal to right index, it's a palindrome
    if (left >= right) {
      return true;
    }
    // Check characters at left and right indices
    if (normalizedStr[left] !== normalizedStr[right]) {
      return false;
    }
    // Move towards the center of the string
    return checkPalindrome(left + 1, right - 1);
  }

  // Start checking from both ends of the string
  return checkPalindrome(0, normalizedStr.length - 1);
}
