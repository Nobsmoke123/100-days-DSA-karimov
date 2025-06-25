function ListNode(val) {
  this.val = val;
  this.next = null;
}

function printLinkedList(head) {
  const result = [];

  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result.join("->");
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

const list1 = createLinkedList([2, 4, 4, 6, 8, 8, 9, 10, 12, 13, 14, 15]);
const list2 = createLinkedList([1, 3, 3, 5, 7, 7, 8, 9, 11]);

console.log(printLinkedList(list1));
console.log(printLinkedList(list2));

function mergeLinkedLists(head1, head2) {
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  let dummy = new ListNode(-1);
  let current = dummy;
  while (head1 !== null && head2 !== null) {
    if (head1.val <= head2.val) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }
  if (head1 !== null) {
    current.next = head1;
  } else if (head2 !== null) {
    current.next = head2;
  }
  return dummy.next;
}

function mergeLinkedList(head1, head2) {
  const dummy = { head: null, tail: null, size: 0 };

  if (!head1) {
    return head2;
  }

  if (!head2) {
    return head1;
  }

  while (head1 || head2) {
    const min = Math.min(head1 ? head1.val : 0, head2 ? head2.val : 0);
    const max = Math.max(head1 ? head1.val : 0, head2 ? head2.val : 0);

    const minNode = new ListNode(min);
    const maxNode = new ListNode(max);

    if (dummy.size == 0) {
      dummy.head = minNode;
      dummy.tail = minNode;
      dummy.tail.next = maxNode;
      dummy.tail = maxNode;
      dummy.size = dummy.size + 1;
    } else {
      let currentTail = dummy.tail.val; // tail-4, min-3, max-4
      if (currentTail > min && min !== 0) {
        dummy.tail.val = min;
        const newNode = new ListNode(currentTail);
        dummy.tail.next = newNode;
        dummy.tail = newNode;
      } else if (min !== 0) {
        dummy.tail.next = minNode;
        dummy.tail = minNode;
        currentTail = dummy.tail.val;
      }

      if (currentTail > max && max !== 0) {
        dummy.tail.val = max;
        const newNode = new ListNode(currentTail);
        dummy.tail.next = newNode;
        dummy.tail = newNode;
      } else if (max !== 0) {
        dummy.tail.next = maxNode;
        dummy.tail = maxNode;
      }
    }
    head1 = head1 ? head1.next : null;
    head2 = head2 ? head2.next : null;
  }
  return dummy.head;
}

function mergeLinkedListShorter(head1, head2) {
  const dummy = new ListNode(0); // dummy node
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
  // Attach the remaining nodes (only one of them will be non-null)
  current.next = head1 || head2;
  return dummy.next;
}

// 1 2 3 4 5 6
// 0 1 2 3 4 5

console.log("###--Result--###");
// console.log(printLinkedList(mergeLinkedList(list1, list2)));
// console.log(printLinkedList(mergeLinkedLists(list1, list2)));
console.log(printLinkedList(mergeLinkedListShorter(list1, list2)));
