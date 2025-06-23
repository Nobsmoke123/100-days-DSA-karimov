import Node from "./Node.js";

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0; // To keep track of the number of nodes in the list
  }

  //   O(1) time complexity
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  //   O(N) time complexity
  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  //   O(N) time complexity
  search(target) {
    let current = this.head;

    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  //   O(N) time complexity
  insert(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds.");
    }

    if (this.size === 0 && index !== 0) {
      throw new Error("Cannot insert at non-zero index in an empty list.");
    }

    if (index === this.size) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let tempNode = this.head;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        tempNode = tempNode.next;
      }
      newNode.next = tempNode.next;
      tempNode.next = newNode;
    }
    this.size++;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds.");
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  //   O(N) time complexity
  toString() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += ` ${current.value}`;
      if (current.next !== null) {
        result += " ->";
      }
      current = current.next;
    }
    return result;
  }

  //   O(1) time complexity
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  popFirst() {
    if (this.size === 0 && this.head === null) {
      throw new Error("List is empty.");
    }

    let removedNode = this.head;
    this.head = this.head.next;
    this.size--;
    removedNode.next = null;

    if (this.size === 0) {
      this.tail = null;
    }

    return removedNode;
  }

  pop() {
    if (this.size === 0 && this.head === null) {
      throw new Error("List is empty.");
    }

    let removedNode = null;

    if (this.size === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      removedNode = this.tail;
      let temp = this.head;
      while (temp.next !== this.tail) {
        temp = temp.next;
      }
      this.tail = temp;
      this.tail.next = null;
    }

    this.size--;
    return removedNode;
  }

  set(value, index) {
    if (this.size === 0) {
      throw new Error("List is empty.");
    }

    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds.");
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.value = value;
    return current;
  }

  remove(index) {
    if (index > this.size - 1 || index < 0) {
      throw new Error("Index out of bounds.");
    }

    if (index === 0) {
      return this.popFirst();
    } else if (index === this.size - 1) {
      return this.pop();
    }

    const previousNode = this.get(index - 1);
    const poppedNode = previousNode.next;
    previousNode.next = poppedNode.next;
    poppedNode.next = null;
    this.size--;
    return poppedNode;
  }

  deleteAll() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

const list = new SingleLinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// console.log(list.toString()); // " 10 -> 20 -> 30"
// list.prepend(5);
// console.log(list.toString()); // " 5 -> 10 -> 20 -> 30"
// list.insert(15, 0);
// list.insert(20, 0);
// list.insert(30, 2);
// list.insert(5, 1);
// console.log(list.toString()); // "20 -> 5 -> 15 -> 30"
// list.traverse();
// console.log(list.search(20));
// console.log(list.search(50));
// console.log(list.get(3));
// console.log(list.toString()); // "20 -> 5 -> 15 -> 30"
// list.set(25, 2);
// console.log(list.toString()); // "20 -> 5 -> 25 -> 30"
// list.popFirst();
// console.log(list.toString()); // "5 -> 25 -> 30"
// console.log(list.head);
list.insert(10, 0);
console.log(list);
console.log(list.toString()); // "10"
// list.pop();
// list.toString(); // ""
// list.append(20);
// console.log(list);
// list.popFirst();
