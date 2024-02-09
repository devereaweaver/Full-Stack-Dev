/* An illustration of using named exports. Named exports can be exported inline
 * or with curly brackets */

// Inline export
export const getFooBar = () => {
    console.log('Foo bar');
};

const getBar = () => {
    console.log('Bar');
};

const getBaz = () => {
    console.log('Baz');
}

// Export multiple functions as named exports
export {getBar, getBaz};