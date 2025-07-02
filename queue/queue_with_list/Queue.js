class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const temp = this.head;
    this.head = temp.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  front() {
    return this.head;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  toString() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result.join(" -> ");
  }
}

const queue = new Queue();
console.log(queue.toString());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log(queue.toString());
queue.dequeue();
console.log(queue.toString());
console.log(queue.front());
console.log(queue.isEmpty());
