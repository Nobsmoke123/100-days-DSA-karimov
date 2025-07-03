/**
 * Circular Queue Using Arrays
 * Implement a circular queue using an array . A circular queue is a linear data structure that follows the First-In-First-Out (FIFO) principle but connects the last position back to the first position, forming a circle. This design allows for efficient utilization of space, especially when the queue is full and elements are dequeued.

 * Your task is to create a CircularQueue class with the following methods:

 * enqueue(value): Adds an element to the rear of the queue. If the queue is full, it should overwrite the oldest element.

 * dequeue(): Removes and returns the front element of the queue. If the queue is empty, it should return null.

 * isEmpty(): Returns true if the queue is empty; otherwise, returns false.

 * isFull(): Returns true if the queue is full; otherwise, returns false.

 * peek(): Returns the front element without removing it. If the queue is empty, it should return null.

 * const queue = new CircularQueue(3);
 * console.log(queue.isEmpty()); // Output: true
 * queue.enqueue(1);
 * queue.enqueue(2);
* queue.enqueue(3);
* console.log(queue.isFull()); // Output: true
* console.log(queue.peek());   // Output: 1
* console.log(queue.dequeue()); // Output: 1
* queue.enqueue(4);
* console.log(queue.peek());   // Output: 2 
 */

class CircularQueue {
  constructor(size) {
    // Initialize the queue with a fixed size
    this.queue = new Array(size);
    this.length = 0;
  }

  enqueue(value) {
    // Add an element to the rear of the queue
    if (this.isFull()) {
      this.queue[0] = value;
    } else {
      this.queue[this.length] = value;
    }
    this.length = this.length + 1;
  }

  dequeue() {
    // Remove and return the front element of the queue
    if (this.isEmpty()) return null;
    this.length = this.length - 1;
    return this.queue.shift();
  }

  isEmpty() {
    // Return true if the queue is empty
    return this.length === 0;
  }

  isFull() {
    // Return true if the queue is full
    return this.length === this.queue.length;
  }

  peek() {
    // Return the front element without removing it
    if (this.length === 0) return null;
    return this.queue[0];
  }
}
