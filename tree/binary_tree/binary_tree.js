class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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
    return temp.value;
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

class BinaryTree {
  constructor() {
    this.root = null;
  }

  levelOrder() {
    if (this.root === null) return;

    const queue = new Queue();

    queue.enqueue(this.root);

    while (queue.size() > 0) {
      let node = queue.dequeue();
      console.log(node.value);
      if (node.left !== null) queue.enqueue(node.left);
      if (node.right !== null) queue.enqueue(node.right);
    }
  }

  postOrder() {
    if (this.root === null) return;
    const stack = [this.root];
    while (stack.length > 0) {
      const node = stack[stack.length - 1];
      if (node.left !== null) {
        stack.push(node.right);
        stack.push(node.left);
      } else {
        const popped = stack.pop();
        const prevNode = stack[stack.length - 1];
        if (
          prevNode !== undefined &&
          prevNode?.left !== null &&
          prevNode?.right !== null &&
          prevNode.right === popped
        ) {
          prevNode.left = null;
          prevNode.right = null;
        }
        console.log(popped.value);
      }
    }
  }

  inOrder() {
    if (this.root === null) return;
    const stack = [this.root];
    while (stack.length > 0) {
      const node = stack[stack.length - 1];
      if (node.left !== null) {
        stack.push(node.left);
      } else {
        const popped = stack.pop();
        const prevNode = stack[stack.length - 1];
        if (prevNode) {
          prevNode.left = null;
        }
        console.log(popped.value);
        if (popped.right !== null) stack.push(popped.right);
      }
    }
  }

  inOrderRec(node = this.root) {
    if (node !== null) {
      this.inOrderRec(node.left);
      console.log(node.value);
      this.inOrderRec(node.right);
    }
  }

  preOrder() {
    if (this.root === null) return;

    const stack = [this.root];

    while (stack.length > 0) {
      const node = stack.pop();
      console.log(node.value);

      if (node.right !== null) stack.push(node.right);
      if (node.left !== null) stack.push(node.left);
    }
  }

  preorderRec(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preorderRec(node.left);
      this.preorderRec(node.right);
    }
  }

  insert(value) {
    const newNode = new Node(value);

    // If the binary tree is empty
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let queue = new Queue();
    queue.enqueue(this.root);

    while (queue.size() > 0) {
      let node = queue.dequeue();

      if (node.left === null) {
        node.left = newNode;
        return;
      } else {
        queue.enqueue(node.left);
      }

      if (node.right === null) {
        node.right = newNode;
        return;
      } else {
        queue.enqueue(node.right);
      }
    }
  }

  deleteDeepestNode(){
    
  }
}
