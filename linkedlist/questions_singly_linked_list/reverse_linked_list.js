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

function reverseLinkedList(head) {
  let current = head;
  let prev = null;

  while (current) {
    const next = current.next; // Store the next node
    current.next = prev; // reverse the link
    prev = current; // move prev to current
    current = next; // move to the next node
  }

  return prev; // prev will be the new head of the reversed list
}
