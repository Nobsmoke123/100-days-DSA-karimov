class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  toString() {
    let current = this.head;
    console.log(current);
    const result = [];
    while (current.next) {
      result.push(current.value);
      if (current.next === this.head) {
        break;
      }
      current = current.next;
    }
    return result.join(" <-> ");
  }

  append(value) {
    if (value === null) {
      return null;
    }
    const newNode = new Node(value);
    if (!this.head) {
      newNode.next = newNode;
      newNode.prev = newNode;
      this.tail = newNode;
      this.head = newNode;
    } else {
      const temp = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      newNode.prev = temp;
      newNode.next = this.head;
      this.head.prev = this.tail;
    }
    this.size = this.size + 1;
  }

  prepend(value) {
    if (value === null) {
      return null;
    }

    const newNode = new Node(value);

    if (!this.head) {
      newNode.next = newNode;
      newNode.prev = newNode;
      this.tail = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.size = this.size + 1;
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
    return result.join(" , ");
  }

  reverse() {
    let current = this.tail;
    const result = [];
    while (current) {
      result.push(current.value);
      if (current.prev === this.tail) {
        break;
      }
      current = current.prev;
    }
    return result.join(" , ");
  }

  search(value) {
    if (value === null) {
      return null;
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      if (current.next === this.head) {
        break;
      }
      current = current.next;
    }
    return false;
  }

  get(index) {
    if (index < 0 || index >= this.size || index === null) {
      return null;
    }

    if (index === 0) {
      return this.head;
    } else if (index === this.size - 1) {
      return this.tail;
    } else {
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
  }

  set(target, value) {
    if (target < 0 || target >= this.size || target === undefined) {
      return null;
    }

    let preNode = this.get(target);

    preNode.value = value;
  }

  insert(target, value) {
    if (target < 0 || target >= this.size || target === undefined) {
      return null;
    }
    const newNode = new Node(value);
    let preNode = this.get(target - 1);

    if (target === 0) {
      this.prepend(value);
    } else {
      newNode.next = preNode.next;
      preNode.next = newNode;
      newNode.prev = preNode;
      this.size = this.size + 1;
    }
  }

  popFirst() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;
    const next = this.head.next;
    this.head = next;
    this.tail.next = this.head;
    next.prev = this.tail;
    temp.next = null;
    temp.prev = null;
    this.size = this.size - 1;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let temp = this.tail;
    const prevNode = this.tail.prev;
    this.tail = prevNode;
    this.head.prev = prevNode;
    prevNode.next = this.head;
    temp.next = null;
    temp.prev = null;
    this.size = this.size - 1;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.size || index === undefined) {
      return null;
    }
    if (index === 0) {
      return this.popFirst();
    } else if (index === this.size - 1) {
      return this.pop();
    } else {
      const preNode = this.get(index - 1);
      const nextNode = preNode.next.next;
      preNode.next = nextNode;
      nextNode.prev = preNode;
      this.size = this.size - 1;
    }
  }

  deleteAll() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

const cdl = new CircularDoublyLinkedList();
