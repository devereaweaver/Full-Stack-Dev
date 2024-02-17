var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* The Express.js server written with React rendered in browser */
import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express from "express";
import path from "path";
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
    // Get the current weather details based on the zipcode information in the endpoint
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
});
server.get("/components/weather", function (req, res) {
    // Serve up the weather 🌤️
    const filePath = path.join(process.cwd(), "public", "weather.html"); /* Create a file path to the weather.html file */
    res.setHeader("Content-type", "text/html"); /* Set the response's content type */
    res.sendFile(filePath); /* Send the static html file to the browser */
});
// Listen for more requests
server.listen(port, function () {
    console.log("Listening on " + port);
});
