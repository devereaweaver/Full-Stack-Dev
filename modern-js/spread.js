/* The spread operator expands the values of an array or the properties of an
 * object into their own variables or constants. 
 */

// E.g. Using the spread operator to assign the multiple values of an object to 
// several constants. 

// Create an Object 
let object = {fruit: "apple", color: "green"};

// Assign the values of object's keys to the variables in the {}
let {fruit, color} = {...object};
console.log(`fruit: ${fruit}, color: ${color}`);

// Reassign the color key's value, does this change object's property too?...
color = "red";
console.log(`object.color: ${object.color}, color: ${color}`);

// Nope, it leaves object's property the same

/* The spread operator creates a cloned version of the array, meaning the copy
 * allocates its own memory, thus it is a separate object. This is useful because
 * by default, using the = operator will simply create a reference and won't 
 * create a separate object. This is useful when we want to create a standalone
 * duplicate of some array we're dealing with. 
 */