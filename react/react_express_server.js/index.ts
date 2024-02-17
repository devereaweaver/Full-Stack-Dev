/* The Express.js server written with React rendered in browser */
import {routeHello, routeAPINames, routeWeather} from "./routes.js";
import express, {Request, Response} from "express";

import path from "path";

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
    // Get the current weather details based on the zipcode information in the endpoint
    const response = routeWeather({zipcode: req.params.zipcode});
    res.send(response);
});

server.get("/components/weather", function (req: Request, res: Response): void {
    // Serve up the weather 🌤️
    const filePath = path.join(process.cwd(), "public", "weather.html");  /* Create a file path to the weather.html file */
    res.setHeader("Content-type", "text/html");    /* Set the response's content type */
    res.sendFile(filePath);    /* Send the static html file to the browser */
});

// Listen for more requests
server.listen(port, function(): void {
    console.log("Listening on " + port);
});