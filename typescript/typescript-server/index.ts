/* This Express.js server extends the example server we've been working with in 
 * the previous exercises. It does so by using TypeScript instead of regular JS
 * to create some custom types. 
 * 
 * One thing to note here is that since we're using TypeScript, observe that we
 * need to add type annotations to call backs used in the GET requests. Another
 * thing to note about this is that TS convention is to prefix unused parameters
 * with an underscore.
 */

// Import our routes and specific objects from express
import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express, {Request, Response} from "express";

// Create a server instance and set the port number 
const server = express();
const port = 3000;

// Handle the GET requests for each endpoint
server.get("/hello", function(_req: Request, res: Response): void {
    const response = routeHello();
    res.send(response);
});

server.get("/api/names", async function(_req: Request, res: Response): Promise<void> {
    let response: string;
    try {
        response = await routeAPINames();    // get the parsed names
        res.send(response);
    } catch (err) {
        console.log(err);
    }
});

server.get("/api/weather/:zipcode", function(req: Request, res: Response): void {
    // Get the current weather details based on the zipcode information in the 
    // endpoint
    const response = routeWeather({zipcode: req.params.zipcode});
    res.send(response);
});

// Listen for more requests
server.listen(port, function(): void {
    console.log("Listening on " + port);
});