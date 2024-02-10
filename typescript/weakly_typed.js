/* JavaScript is weakly typed so it does some implicit conversions, which isn't
 * always what we want. 
 */

// E.g. Implicit conversion from a number to a string
let string = "1";
let number = 1;
let result;

result = number + number;
console.log("value: ", result, "type of ", typeof(result));

result = number + string;   // oh boy...
console.log("value: ", result, "type of ", typeof(result));
