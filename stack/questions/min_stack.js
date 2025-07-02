class MinStack {
  constructor() {
    this.mainStack = []; // Stack to hold all elements
    this.minStack = []; // Stack to track the minimums
    this.length = 0;
  }

  // Add a new element to the stack
  push(val) {
    // TO DO: Implement this method
    if (this.length === 0) {
      this.minStack.push(val);
    } else {
      const currentMin = this.minStack[this.minStack.length - 1];
      if (currentMin > val) {
        this.minStack.push(val);
      } else {
        this.minStack.push(currentMin);
      }
    }
    this.mainStack.push(val);
    this.length++;
  }

  // Remove the top element from the stack
  pop() {
    // TO DO: Implement this method
    if (this.mainStack.length === 0) return null;
    this.minStack.pop();
    const popped = this.mainStack.pop();
    this.length--;
    return popped;
  }

  // Retrieve the top element without removing it
  top() {
    // TO DO: Implement this method
    if (this.mainStack.length === 0) return null;
    return this.mainStack[this.mainStack.length - 1];
  }

  // Retrieve the minimum element in the stack
  getMin() {
    // TO DO: Implement this method
    return this.minStack[this.length - 1];
  }
}


const minStack = new MinStack();