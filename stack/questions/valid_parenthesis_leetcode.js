/**
 * 
 * Valid Parentheses (LeetCode 20)
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 *
 * Open brackets must be closed in the correct order.
 *
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * Example 1:
 *
 * Input: s = "()"
 *
 * Output: true

 * Example 2:
 *
 * Input: s = "()[]{}"
 *
 * Output: true
 *
 * Example 3:
 *
 * Input: s = "(]"
 *
 * Output: false
 *
 * Example 4:
 *
 * Input: s = "([])"
 *
 * Output: true
 */

class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  push(element) {
    this.items.push(element);
    this.length++;
  }

  pop() {
    if (this.length === 0) return null;
    this.length--;
    return this.items.pop();
  }

  peek() {
    if (this.length === 0) return null;
    return this.items[this.length - 1];
  }

  size() {
    return this.length;
  }

  toString() {
    return this.items.join("").toString();
  }
}

function isValid(s) {
  const matcher = {
    "{": "}",
    "(": ")",
    "[": "]",
    "]": "[",
    ")": "(",
    "}": "{",
  };

  const stack = new Stack();

  const s_values = s.split("");

  for (let token of s_values) {
    if (stack.peek() !== matcher[token]) {
      stack.push(token);
    } else {
      stack.pop();
    }
  }

  return stack.size() === 0;
}
