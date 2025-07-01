class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.tail;
      this.tail.next = newNode;
      newNode.prev = temp;
      this.tail = newNode;
    }
    this.size = this.size + 1;
  }

  toString() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(" <-> ");
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const temp = this.head;
      this.head.prev = newNode;
      newNode.next = temp;
      this.head = newNode;
    }
    this.size = this.size + 1;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  reverse() {
    let current = this.tail;
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }

  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  get(index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    let current;

    if (index < Math.floor(this.size / 2)) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.size - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  set(target, value) {
    if (target < 0 || target > this.size) {
      return null;
    }

    if (!this.head) {
      this.prepend(value);
      return true;
    }

    let node = this.get(target);
    node.value = value;
    return true;
  }

  insert(target, value) {
    if (target < 0 || target > this.size) {
      return null;
    }

    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const newNode = new Node(value);

      let current = this.head;

      for (let i = 0; i < target - 1; i++) {
        current = current.next;
      }

      const temp = current.next;
      current.next = newNode;
      newNode.prev = current;
      newNode.next = temp;
    }

    this.size = this.size + 1;
  }

  popFirst() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;
    let next = this.head.next;
    this.head = next;
    this.head.prev = null;
    temp.next = null;
    this.size = this.size - 1;

    if (this.size === 0) {
      this.tail = null;
      this.head = null;
    }
    return this.temp;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.size = this.size - 1;

    if (this.size === 0) {
      this.tail = null;
      this.head = null;
    }

    return temp;
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    if (index === 0) {
      return this.popFirst();
    } else if (index === this.size) {
      return this.pop();
    } else {
      const node = this.get(index - 1);
      const temp = node.next;
      node.next.next.prev = node;
      node.next = node.next.next;
      temp.next = null;
      temp.prev = null;
      this.size = this.size - 1;
      return temp;
    }
  }

  deleteAll() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
