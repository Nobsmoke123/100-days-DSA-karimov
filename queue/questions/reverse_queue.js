/**
 * Reverse a Queue
 * Implement a function to reverse the elements of a queue. A queue follows the First-In-First-Out (FIFO) principle, meaning elements are added at the rear and removed from the front. Reversing a queue will change the order of elements so that the first element becomes the last, the second becomes the second last, and so on.

 * Your task is to create a function reverseQueue(queue) that takes a queue as input and returns a new queue with the elements in reverse order.
 *
 * const queue = new Queue();
 * queue.enqueue(1);
 * queue.enqueue(2);
 * queue.enqueue(3);
 *
 * const reversedQueue = reverseQueue(queue);
 * console.log(reversedQueue.dequeue()); // Output: 3
 * console.log(reversedQueue.dequeue()); // Output: 2
 * console.log(reversedQueue.dequeue()); // Output: 1
 *
 */

function reverseQueue(queue) {
  const stack = [];

  // Dequeue all elements from the queue and push them onto the stack
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }

  // Pop elements from the stack and enqueue them back to the queue
  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }

  return queue;
}
