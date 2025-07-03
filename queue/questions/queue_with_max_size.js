/**
 * Queue with Max Size
 * Implement a queue that has a fixed maximum size. The queue should support the following operations:
 *
 * Enqueue(element): Add an element to the rear of the queue. If the queue is full, throw an error indicating a queue overflow.
 *
 * Dequeue(): Remove and return the front element of the queue. If the queue is empty, throw an error indicating a queue underflow.
 *
 * isEmpty(): Check if the queue is empty.
 *
 * isFull(): Check if the queue is full.
 *
 * size(): Return the current number of elements in the queue.
 */

class Queue {
  constructor(maxSize) {
    // Initialize the queue with a maximum size
    this.length = 0;
    this.queue = new Array(maxSize);
  }

  enqueue(element) {
    // Add an element to the rear of the queue
    if (!this.isFull()) {
      this.queue[this.length] = element;
    } else {
      throw new Error("Queue overflow: maximum size reached");
    }
    this.length = this.length + 1;
  }

  dequeue() {
    // Remove and return the front element of the queue
    if (this.isEmpty())
      throw new Error("Queue underflow: no elements to dequeue");
    this.length = this.length - 1;
    return this.queue.shift();
  }

  isEmpty() {
    // Check if the queue is empty
    return this.length === 0;
  }

  isFull() {
    // Check if the queue is full
    return this.length === this.queue.length;
  }

  size() {
    // Return the current number of elements in the queue
    return this.length;
  }
}
