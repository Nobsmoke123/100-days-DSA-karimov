/**
 * Palindrome Linked List (LeetCode 234)
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 * 
 * Example 1:



Input: head = [1,2,2,1]
Output: true
Example 2:



Input: head = [1,2]
Output: false

 */

function isPalindrome(head) {
  if (!head || !head.next) return true;

  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let prev = null;
  while (slow) {
    const nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }

  // Step 3: Compare the first half and the reversed second half
  let left = head;
  let right = prev; // This is now the head of the reversed second half
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  return true;
}

function isPalindromeMyVersion(head) {
  const result = [];
  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  if (result.length === 2) {
    return result[0] === result[1];
  }

  let status = true;
  let length = result.length;
  let count = 0;
  let mid = length / 2 - 1;

  while (count < mid) {
    console.log(
      `value1 ${result[count]} - value2: ${result[length - 1 - count]}`
    );
    if (result[count] !== result[length - 1 - count]) {
      status = false;
      break;
    }
    count++;
  }
  return status;
}

function isPalindromeShorterVersion(head) {
  let temp = head;
  let cur = head;
  let prev = null;
  while (temp && temp.next) {
    temp = temp.next.next;
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  if (temp) {
    cur = cur.next;
  }
  while (cur) {
    if (cur.val !== prev.val) return false;
    cur = cur.next;
    prev = prev.next;
  }
  return true;
}
