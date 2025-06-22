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

  insert() {
    
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
list.append(10);
list.append(20);
list.append(30);
console.log(list.toString()); // " 10 -> 20 -> 30"
list.prepend(5);
console.log(list.toString()); // " 5 -> 10 -> 20 -> 30"
