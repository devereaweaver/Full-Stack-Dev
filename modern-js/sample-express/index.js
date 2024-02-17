/* An implementation of a simple Express.js-based Node.js server to practice
 * Node.js skills. It will include some annotations and comments that I wouldn't
 * normally include in production or other project code. 
 */

// Load Express and instantiate the app. Then define a constant for the port 
const express = require('express');
const server = express();
const port = 3000;

// Create a route for our server so that it will respond to every GET request 
// send to /hello. What we're doing here is for each GET request that is sent
// to the /hello endpoint, the server runs the callback function. In our 
// callback function, we send the string 'Hello World!' as the response to 
// the browser. 
server.get('/hello', (req, res) => {
    res.send('Hello World!');
});

server.get('/d', (req, res) => {
    res.send('Hello D!');
});

// We use the listen method to spin up the web server and tell it to listen 
// on port 3000.
server.listen(port, () => {
    console.log('Listening on ' + port);
});