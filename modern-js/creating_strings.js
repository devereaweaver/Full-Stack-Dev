/* Some brief examples of dealing with strings in JS */

// Untagged template literal
let a = 1;
let b = 2;
let string = `${a} + ${b} = ${a + b}`;
console.log(string);

// An example of an tagged template literal. So, what's going on here is that 
// since an expression preceded our template literal, the template literal is 
// interpreted as a tagged template. The function receives a template literal as
// well as the substitution values as arguments.
function tag(literal, ...values) {
    console.log("literal", literal);    // the literals part of the tagged temp
    console.log("values", values);      // the substituted values part

    let result;

    // switch on the fourth word (second literal) in the tagged template
    switch(literal[1]) {   
        case " plus ":
            result = values[0] + values[1];
            break;
        case " minus ":
            result = values[0] - values[1];
            break;
    }
    return `${values[0]}${literal[1]}${values[1]} is ${result}`;
}

let output = tag`What is ${a} plus ${b}?`;
console.log(output);
