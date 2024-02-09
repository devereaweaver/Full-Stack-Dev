/* One alternative to using callbacks is to use promises. A promise will also 
 * defer tasks until a previous task is completed (or fails). They are function 
 * calls that don't return an immediate result. THey will instead promise to 
 * return the result at some point later. However, an error will reject the 
 * promise. 
 * 
 * Promise objects have a state and result property. The state describes the
 * current state of the promise (pending, fulfilled, rejected) and the result 
 * is set accordingly. E.g. if the promise is fulfilled the result will contain
 * the return value of the promise and if the promise is rejected, the result 
 * will contain an error. 
 */

// E.g. We'll use the fetch API fetch() method to request some JSON data. This 
// method returns a Promise object that resolve to the Response to the request. 
// If the request is successful, then we can use then() methods to operate on
// that JSON data. 
function fetchData(url) {
    /* Requests JSON data from the given url argument. */
    fetch(url)
        .then((response) => response.json())    // resolve the datastream to json
        .then((json) => console.log(json))
        .catch((error) => { 
            console.log(`Error: ${error}`)
        });
}

fetchData("https://www.usemodernfullstack.dev/api/v1/users");