/* An illustration of a default export. The default export doesn't allow the
 * user of the exported function to be renamed by the user of the function.
 */

const getFoo = () => {
    console.log('Foo');
};

export default getFoo;