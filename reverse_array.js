```
Reverse an Array
Write a function reverseArray that takes an array and returns a new array with the elements in reverse order.



Example: reverseArray([1, 2, 3, 4]) should return [4, 3, 2, 1].

Hint: You can either use a loop to reverse it manually or utilize JavaScript's built-in array methods.
```;

function reverseArray(arr) {
  // Using the built-in reverse method
  // reverse method modifies the original array in place, so we create a copy first using slice().
  return arr.slice().reverse();
}

function reverseArray2(arr) {
  /**
   * We use arr.pop() to remove the last element and build the reversed array recursively.
   * Using [...input] ensures the original array is not mutated.
   */
  if (arr.length === 0) return [];
  return [arr.pop()].concat(reverseArray(arr));
}

function reverseArray3(arr) {
  /**
   * Using Destructuring and Recursion
   * It uses array destructuring to peel off elements recursively.
   * This method does not mutate the original array.
   */
  if (arr.length === 0) return [];
  const [first, ...rest] = arr;
  return [...reverseArray3(rest), first];
}

function reverseArray4(arr) {
  /**
   * This prepends elements instead of appending them.
   */
  // return arr.reduce((acc, curr) => [curr, ...acc], []); // O(n^2) time complexity
  return arr.reduce((acc, _curr, index, array) => {
    acc.push(array[array.length - 1 - index]);
    return acc;
  }, []); // O(n) time complexity.
}

function reverseArray5(arr) {
  /**
   * We can use map() to create a new array with reversed indexes:
   * map allows access to the full array and its index during iteration.
   */
  return arr.map((_, i, array) => array[array.length - 1 - i]);
}

function reverseArray6(arr) {
  /**
   * This still uses a built-in method, but not .reverse().
   * It gives you a clean, functional alternative.
   */
  return arr.reduceRight((acc, val) => {
    acc.push(val);
    return acc;
  }, []);
}
