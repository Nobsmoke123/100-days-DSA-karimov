function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr) {
  const dummy = new ListNode(-1);
  let current = dummy;

  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
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

printLinkedList(createLinkedList([1, 2, 3, 4, 5, 6]));
const list1 = createLinkedList([1, 2, 3, 4, 5, 6]);

function modifyLinkedListInPlace(head) {
  const dummy = new ListNode(-1);
  dummy.next = head;

  let current = dummy;

  while (current && current.next) {
    if (current.next.val === 3) {
      current.next = current.next.next; // Remove the node with value 3
    }
    current = current.next;
  }
  return dummy.next; // Return the modified linked list
}
printLinkedList(modifyLinkedListInPlace(list1));

