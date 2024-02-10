/* An illustration on the primitive JS types that we can explicitly declare
 * using TS. The five primitives in JS are: strings, numbers, Booleans, 
 * undefined, and null. Errthing else is just an object. 
 */

// E.g. The following is a list of JS types with their TS type annotations
let stringType: string = "bar";
let booleanType: Boolean = true;
let integerType: number = 1;
let floatType: number = 1.5;
let nullType: null = null;
let undefinedType: undefined = undefined;

// E.g. The union TS type can have more than one data type
function whatType(arg: any, argName: string) {
    console.log(`${argName} is of type ${typeof(arg)}`);
};

let stringOrNumberUnionType: string | number | Boolean;
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
let numberArray: number[] = [];
numberArray.push(1);

// E.g. The TS object type is the same as the JS object type. You can define
// property types for TSC to type check but the compiler can't ensure the order
// of the properties. 
let weatherDetail: {
    weather: string, 
    zipCode: string, 
    temp: number
} = {weather: "sunny", zipCode: "00000", temp: 1};

//weatherDetail.weather = 2;   // nah, compiler will catch this guy
weatherDetail.weather = "2";

// E.g. The TS tuple type adds a tuple to JS. You can make it a n-tuple to add
// as many ordered objects as needed.
let validTuple: [string, number] = ["bar", 1];
let anotherValidTuple: [string, string, string] = ["1", "2", "3"];

// E.g. The any type is generic meaning it can take any value and really is best
// avoided. Since it accepts all values without throwing an error, it defeats 
// the purpose of static typing offered by TS.
let indifferent: any = true;
indifferent = 1;
indifferent = [];  // ...see?, kind of pointless, just use JS at this point

// any will also break function contracts
const calculate = (a: any, b: any): any => a + b;
console.log(calculate(1,1));
console.log(calculate("1",1));    // not what we likely wanted

// E.g. The void type is used to indicate no type like in other statically
// typed languages. The only real use case is the annotate the return value
// of a function that shouldn't return anything.
function log(msg: string): void {
    console.log(msg);
}

// ngl, i actually like this one a lot

