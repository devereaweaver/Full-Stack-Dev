/* Another alternative is to use the async/await keywords instead of a chain of
 * promises. Use the async keyword to mark functions explicitly as asynchronous
 * and use the await keyword for the asynchronous code. 
 */

// E.g. Use the fetch API with async/await to fetch JSON data from a
// remote location. 
async function fetchData(url) {
    try {
        // Request the data at the given URL, fetch returns a Promise object
        const response = await fetch(url);    

        // If the request is successful, resolve the DataStream to JSON
        const json = await response.json();

        // All good
        console.log(json);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

fetchData("https://www.usemodernfullstack.dev/api/v1/users");