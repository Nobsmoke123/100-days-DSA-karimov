import Node from "./Node.js";

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0; // To keep track of the number of nodes in the list
  }

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
}

const list = new SingleLinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// console.log(list.toString()); // " 10 -> 20 -> 30"
// list.prepend(5);
// console.log(list.toString()); // " 5 -> 10 -> 20 -> 30"
list.insert(15, 0);
list.insert(20, 0);
list.insert(30, 2);
list.insert(5, 1);
console.log(list.toString()); // " 5 -> 10 -> 15 -> 20 -> 30"
