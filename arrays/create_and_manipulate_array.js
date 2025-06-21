```
Create and Manipulate Arrays

Implement a function createOddNumbersArray(n) that takes a positive integer n and returns an array containing the first n odd numbers.

Example: createOddNumbersArray(5) should return [1, 3, 5, 7, 9].

Hint: Start from 1 and keep adding 2 until you have n elements.
```;

function createOddNumbersArray(n) {
  if (n === 0) return [];

  const newArray = new Array(1).fill(1);

  for (let i = 1; i < n; i++) {
    newArray[i] = newArray[i - 1] + 2;
  }

  return newArray;
}

createOddNumbersArray(5);
console.log(createOddNumbersArray(5)); // Output: [1, 3, 5, 7, 9]
