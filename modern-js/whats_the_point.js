/* const won't allow primitive types to be mutated */
const primitiveDataType = 1;
try {
    primitiveDataType = 2;    // nah...
} catch(error) {
    console.log(error);
}

/* ...but const WILL allow non-primitive types to be mutated */
const nonPrimitiveDataType = [];
nonPrimitiveDataType.push(1);    
console.log(nonPrimitiveDataType);