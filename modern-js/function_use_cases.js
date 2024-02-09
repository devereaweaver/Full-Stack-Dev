/* An illustration on the different use cases for functions in JS. In JS, 
 * functions are first-class citizens, so we can treat them like any other 
 * object. This means we cn pass them around as arguments to other functions 
 * which is important for web development. */

// E.g. Using a callback function for cleaner syntax and using it as a 
// function argument. 
let numbers = [-2, -1, 0, 1, 2];

// Make a shallow copy of the elements of numbers for which the predicate 
// declared within the callback is true. So, if it's true, add that element 
// to the new array. First we'll use the traditional anon function, then 
// do the same with the fatty.
let traditional = numbers.filter(function(num) {
    return num >= 0;
});
console.log("Traditional [" + traditional + "]");

let arrow = numbers.filter((num) => num >= 0);  // that concise body 👀 
console.log("Arrow: [" + arrow + "]");