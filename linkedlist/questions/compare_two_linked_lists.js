/**
 * 
 * 
Compare two linked lists (HackerRank)
You’re given the pointer to the head nodes of two linked lists. Compare the data in the nodes of the linked lists to check if they are equal. If all data attributes are equal and the lists are the same length, return 1 . Otherwise, return 0 .

Example

list1: 1 -> 2 -> 3 -> NULL
list2: 1 -> 2 -> 3 -> 4 -> NULL
The two lists have equal data attributes for the first 3 nodes. list2 is longer, though, so the lists are not equal. Return 0.

Function Description

Complete the compare_lists function in the editor below.

compare_lists has the following parameters:

SinglyLinkedListNode llist1: a reference to the head of a list

SinglyLinkedListNode llist2: a reference to the head of a list

Returns

int: return 1 if the lists are equal, or 0 otherwise
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
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

function compareList(list1, list2) {
  let status = 1;

  while (list1 && list2) {
    if (list1.val !== list2.val) {
      status = 0;
      break;
    }

    if (list1.next !== null && list2.next === null) {
      status = 0;
      break;
    } else if (list1.next === null && list2.next !== null) {
      status = 0;
      break;
    } else {
      list1 = list1.next;
      list2 = list2.next;
    }
    count++;
  }
  return status;
}

// More concise version of the function
function compareLists(list1, list2) {
  while (list1 && list2) {
    if (list1.val !== list2.val) {
      return 0;
    }
    list1 = list1.next;
    list2 = list2.next;
  }

  return list1 === list2 ? 1 : 0;
}
