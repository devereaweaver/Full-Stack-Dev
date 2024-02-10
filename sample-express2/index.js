/* A more optimized version of the sample Express server. In this 
 * iteration we define our routes in a separate module and use native
 * modules for importing */

// Import our routes as well as the Express module to build the server
import { routeHello, routeAPINames } from "./routes.js";
import express from "express";

// Start the server 
const server = express();
const port = 3000;

// Handle get requests for specified endpoints using our routes this time
server.get("/hello", function (req, res) {
    const response = routeHello(req, res);    // doesn't have to be async
    res.send(response);    // Use our route to serve it up
});

server.get("/api/names", async function(req, res) {
    let response;    // Store our async data

    // Why do we need to pass the request parameter into the route?
    try {
        response = await routeAPINames(req, res);
    } catch (err) {
        console.log(err);
    }

    res.send(response); // serve up the requested data if the promise is fulfilled
});

// Listen for requests
server.listen(port, () => {
    console.log("Listening on port " + port);
});