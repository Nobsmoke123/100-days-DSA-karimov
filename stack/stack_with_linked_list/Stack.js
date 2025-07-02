class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.length += 1;
  }

  pop() {
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length -= 1;
    return temp;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.top = null;
    this.length = 0;
  }

  toString() {
    let current = this.top;
    let result = "";

    while (current) {
      result += current.value + "\n";
      current = current.next;
    }
    return result;
  }

  size() {
    return this.length;
  }
}

const stack = new Stack();
