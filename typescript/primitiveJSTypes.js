/* An illustration on the primitive JS types that we can explicitly declare
 * using TS. The five primitives in JS are: strings, numbers, Booleans,
 * undefined, and null. Errthing else is just an object.
 */
// E.g. The following is a list of JS types with their TS type annotations
var stringType = "bar";
var booleanType = true;
var integerType = 1;
var floatType = 1.5;
var nullType = null;
var undefinedType = undefined;
// E.g. The union TS type can have more than one data type
function whatType(arg, argName) {
    console.log("".concat(argName, " is of type ").concat(typeof (arg)));
}
;
var stringOrNumberUnionType;
stringOrNumberUnionType = "bar";
whatType(stringOrNumberUnionType, "stringOrNumberUnionType");
stringOrNumberUnionType = 1;
whatType(stringOrNumberUnionType, "stringOrNumberUnionType");
stringOrNumberUnionType = true;
whatType(stringOrNumberUnionType, "stringOrNumberUnionType");
// E.g. The array TS type is similar to the JS array, but it is typed
// The following commented out code will cause issues adding the value since
// we didn't specify the type of the array elements
// let genericArray: [] = [];
// genericArray.push(1);
// Instead, it's like an array in other statically typed languages where we
// must specify the type of its elements 
var numberArray = [];
numberArray.push(1);
// E.g. The TS object type is the same as the JS object type. You can define
// property types for TSC to type check but the compiler can't ensure the order
// of the properties. 
var weatherDetail = { weather: "sunny", zipCode: "00000", temp: 1 };
//weatherDetail.weather = 2;   // nah, compiler will catch this guy
weatherDetail.weather = "2";
// E.g. The TS tuple type adds a tuple to JS. You can make it a n-tuple to add
// as many ordered objects as needed.
var validTuple = ["bar", 1];
var anotherValidTuple = ["1", "2", "3"];
// E.g. The any type is generic meaning it can take any value and really is best
// avoided. Since it accepts all values without throwing an error, it defeats 
// the purpose of static typing offered by TS.
var indifferent = true;
indifferent = 1;
indifferent = []; // ...see?, kind of pointless, just use JS at this point
// any will also break function contracts
var calculate = function (a, b) { return a + b; };
console.log(calculate(1, 1));
console.log(calculate("1", 1));
