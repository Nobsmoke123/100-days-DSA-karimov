/**
 * Merge Two Queues
 * Merge two queues into a single queue. A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, where elements are added at the rear and removed from the front. You will implement a function that takes two queues as input and returns a new queue containing all elements from both input queues.
 *
 * Requirements:
 *
 * Implement the mergeQueues function that accepts two queues as parameters.
 *
 * The function should return a new queue containing all elements from both input queues.
 *
 * Do not modify the original input queues.
 *
 *
 * Example
 *
 * const queue1 = new Queue();
 * queue1.enqueue(1);
 * queue1.enqueue(2);
 * queue1.enqueue(3);
 *
 * const queue2 = new Queue();
 * queue2.enqueue(4);
 * queue2.enqueue(5);
 *
 * const mergedQueue = mergeQueues(queue1, queue2);
 *
 * console.log(mergedQueue.size()); // Output: 5
 * console.log(mergedQueue.dequeue()); // Output: 1
 * console.log(mergedQueue.dequeue()); // Output: 2
 * console.log(mergedQueue.dequeue()); // Output: 3
 * console.log(mergedQueue.dequeue()); // Output: 4
 * console.log(mergedQueue.dequeue()); // Output: 5
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    // Add an element to the rear of the queue
    this.items.push(element);
  }

  dequeue() {
    // Remove and return the front element of the queue
    if (this.isEmpty())
      throw new Error("Queue underflow: no elements to dequeue");
    return this.items.shift();
  }

  isEmpty() {
    // Check if the queue is empty
    return this.items.length === 0;
  }

  size() {
    // Return the current number of elements in the queue
    return this.items.length;
  }
}

function mergeQueues(queue1, queue2) {
  // Merge two queues into one
  if (queue1.isEmpty() && queue2.isEmpty()) return null;

  const mergeQueue = new Queue();

  for (let i = 0; i < queue1.size(); i++) {
    mergeQueue.enqueue(queue1.items[i]);
  }

  for (let i = 0; i < queue2.size(); i++) {
    mergeQueue.enqueue(queue2.items[i]);
  }

  return mergeQueue;
}
