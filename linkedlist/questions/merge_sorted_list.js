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

const list1 = createLinkedList([1, 2, 3, 3, 4, 5, 6, 16, 18, 19, 23]);
const list2 = createLinkedList([3, 4, 4, 5, 6, 10, 11, 12, 15, 17, 20, 21, 22]);

console.log("List 1: ", printLinkedList(list1));
console.log("List 2: ", printLinkedList(list2));

function mergeSortedList(head1, head2) {
  const dummy = new ListNode(-1);

  let current = dummy;

  while (head1 && head2) {
    if (head1.val <= head2.val) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }
  current.next = head1 || head2;

  return dummy.next;
}
