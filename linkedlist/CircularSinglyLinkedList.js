class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularSinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // the list is empty
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = newNode;
    }
    this.size++;
  }

  toString() {
    const tempNode = this.head;
    let current = this.head;
    let result = "";

    while (current) {
      result += `${current.value}`;
      if (current.next === tempNode) {
        break;
      }
      result += " -> ";
      current = current.next;
    }
    return result;
  }

  traverse() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      if (current.next === this.head) {
        break;
      }
      current = current.next;
    }
    return result.join(" --- ").toString();
  }

  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      if (current.next === this.head) {
        break;
      }
      current = current.next;
    }
    return false;
  }

  get(index) {
    if (index < 0 || index > this.size - 1) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  setNode(index, value) {
    if (index < 0 || index > this.size - 1) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.value = value;
    return current;
  }

  popFirst() {
    if (!this.head) return null;

    const temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.tail.next = this.head;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    const temp = this.tail;
    let current = this.head;
    while (current.next !== temp) {
      current = current.next;
    }
    current.next = temp.next;
    this.tail = current;
    temp.next = null;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  remove() {
    if (index < 0 || index > this.size - 1) return null;

    if (index === 0) {
      return this.popFirst();
    }

    let prev = null;
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = prev.next.next;
    curr.next = null;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }

  deleteAll() {
    this.head = null;
    this.tail.next = null;
    this.tail = null;
    this.size = 0;
  }
}
