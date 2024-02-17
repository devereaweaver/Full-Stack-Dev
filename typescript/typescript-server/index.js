/* This Express.js server extends the example server we've been working with in
 * the previous exercises. It does so by using TypeScript instead of regular JS
 * to create some custom types.
 *
 * One thing to note here is that since we're using TypeScript, observe that we
 * need to add type annotations to call backs used in the GET requests. Another
 * thing to note about this is that TS convention is to prefix unused parameters
 * with an underscore.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Import our routes and specific objects from express
import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express from "express";
// Create a server instance and set the port number 
const server = express();
const port = 3000;
// Handle the GET requests for each endpoint
server.get("/hello", function (_req, res) {
    const response = routeHello();
    res.send(response);
});
server.get("/api/names", function (_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let response;
        try {
            response = yield routeAPINames(); // get the parsed names
            res.send(response);
        }
        catch (err) {
            console.log(err);
        }
    });
});
server.get("/api/weather/:zipcode", function (req, res) {
    // Get the current weather details based on the zipcode information in the 
    // endpoint
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
});
// Listen for more requests
server.listen(port, function () {
    console.log("Listening on " + port);
});
