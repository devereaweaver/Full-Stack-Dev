/* Modern JS introduces a whole set of array functions. */

// Map - run a function on each array item and return a new array with the 
// modified items, doesn't mutate the original array
// E.g. Use map to iterate over an array of numbers and use a callback function
const original = [1,2,3,4];
const multiplied = original.map((num) => num * 10);
console.log(`original array: ${original}`);
console.log(`multiplied array: ${multiplied}`);
