/**
 * 
 *
Remove Linked List Elements (LeetCode 203)
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.



Example 1:



Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []} head 
 * @param {*} val 
 */

// My solution with time complexity of O(n) and space complexity of O(n)
function removeLinkedListElements(head, val) {
  let current = head;

  let dummyNode = { head: null, tail: null, size: 0 };

  while (current && current.next) {
    if (current.val !== val && dummyNode.size === 0) {
      const newNode = new ListNode(current.val);
      dummyNode.head = newNode;
      dummyNode.tail = newNode;
      dummyNode.size = dummyNode.size + 1;
    } else if (current.val !== val && dummyNode.size > 0) {
      const newNode = new ListNode(current.val);
      dummyNode.tail.next = newNode;
      dummyNode.tail = newNode;
      dummyNode.size = dummyNode.size + 1;
    }
    current = current.next;
  }
  return dummyNode.head;
}

function removeLinkedListElementsShorterVersion(head, val) {
  // Create a dummy node to handle edge cases like removing the head
  const dummy = { val: null, next: head };
  let current = dummy;

  // Traverse the linked list
  while (current.next) {
    if (current.next.val === val) {
      // Remove the node by skipping it
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  // Return the new head, which is the next of the dummy node
  return dummy.next;
}
