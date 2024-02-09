/* An illustration on writing arrow functions in JS */

// Using function keyword
const traditional = function (x) {
    return x * x;
}

// Just using fat arrow
const fatty = (x) => {
    return x * x;
}

// Concise body for one-liners 
const conciseBody = x =>  x * x;

// Looks like the concise body may be a crowd favorite, but I'm leaning toward
// the second version using the fat arrow, {}, and return since that's the type
// of function body I'm used to. I also like the explicit return instead of the
// implied return. 

/* Understanding Lexical Scope */

// Arrow functions use lexical scope in which the surrounding scope determines
// the value of the this keyword...so for arrow functions, this refers to the 
// object defining the arrow function instead of the object calling the arrow 
// function. As an example...
this.scope = "lexical scope";

const scopeOf = {
    scope: "defining scope",
    traditional: function() {return this.scope;},
    arrow: () => { return this.scope;}
};

console.log(scopeOf.traditional());
console.log(scopeOf.arrow());