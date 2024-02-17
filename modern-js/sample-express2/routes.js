/* We need to create a routes.js file to replace the require call with 
 * named modules for the different routes. This is an ES.Next module 
 * with asynchronous code. 
 * 
 * The routes are asynchronous functions that executed by the server 
 * when the client makes a specific HTTP request. 
 */

// The first difference is that we use the import and export statements 
// to define dependencies and expose functionality instead of the 
// require and module.exports statements that are used with CommonJS 
// modules. 
import fetch from "node-fetch";

// Create a route for the /hello endpoint
const routeHello = () => "Hello World!";

// Create a route for the /api/names endpoint
const routeAPINames = async () => {
    // define endpoint
    const url = "https://www.usemodernfullstack.dev/api/v1/users";

    // store our async data
    let data;

    // request the data and handle any errors
    try {
        const response = await fetch(url);
        data = await response.json();
    } catch (err) {
        return err;
    }

    // if we're able to get the data, iterate over the data array to parse
    // the name and the id fields of the returned json file
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");

    // returned the formatted array
    return names;
}

// Observe the naming convention here where name what they are
// (routes in this case)...
export {routeHello, routeAPINames};