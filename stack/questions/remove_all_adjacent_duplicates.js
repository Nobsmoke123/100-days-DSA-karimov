/**
 * 
 * Remove All Adjacent Duplicates In String (LeetCode 1047)
 * You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
 * We repeatedly make duplicate removals on s until we no longer can.
 * Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
 * Example 1:
 * 
 * Input: s = "abbaca"
 * Output: "ca"
 * Explanation:
 * 
 * For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
 * 
 * Example 2:
 * 
 * Input: s = "azxxzy"
 * Output: "ay"

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
function removeDuplicates(s) {
  const s_values = s.split("");

  if (s_values.length === 0) return "";

  const stack = new Stack();

  for (let char of s_values) {
    if (stack.peek() !== char) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.toString();
}

console.log(removeDuplicates("azxxzy"));
