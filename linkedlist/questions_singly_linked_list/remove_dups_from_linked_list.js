/**
 * Remove Duplicates from Sorted List (LeetCode 83)
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.     

Example 1:

Input: head = [1,1,2] 
Output: [1,2] 
Example 2:   

Input: head = [1,1,2,3,3] 
Output: [1,2,3]    


Constraints:  The number of nodes in the list is in the range [0, 300].

-100 <= Node.val <= 100

The list is guaranteed to be sorted in ascending order.
 */

function removeDuplicates(head) {
  if (!head) return null; // If the list is empty, return null

  let current = head; // Start with the head of the list

  while (current && current.next) {
    if (current.val === current.next.val) {
      // If the current value is equal to the next value, skip the next node
      current.next = current.next.next;
    } else {
      // Otherwise, move to the next node
      current = current.next;
    }
  }

  return head; // Return the modified list
}

// Example usage:
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function createLinkedList(arr) {
  let head = null;
  let tail = null;

  for (let val of arr) {
    const newNode = new ListNode(val);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  return head;
}

function printLinkedList(head) {
  let current = head;
  const result = [];

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  console.log(result.join(" -> "));
}

// Example usage
const head = createLinkedList([1, 1, 2, 3, 3]);
console.log("Original List:");
printLinkedList(head);
const modifiedHead = removeDuplicates(head);
console.log("List after removing duplicates:");
printLinkedList(modifiedHead);
