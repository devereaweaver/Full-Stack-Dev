/* routes.ts - contains the functionality the gets executed when a client makes
 * a request for some endpoint; this version of our routes file will contain type
 * annotations 
 */

import { query } from "express";
import fetch from "node-fetch";

// Create a route for the hello endpoint with a type annotation
const routeHello = (): string => "Hello, World!";

// Create a route for the names endpoint that returns the user id and the names
const routeAPINames = async (): Promise<string> => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data: responseItemType[];    // our custom type that contains an id and name property

    try {
        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        return "Error";
    }

    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");

    return names;
}

// Create routes for the new weather endpoints. This callback takes an 
// instance of the WeatherQueryInterface and returns an instance of the 
// WeatherDetailType 
const routeWeather = (query: WeatherQueryInterface) : WeatherDetailType =>
    queryWeatherData(query);

// Call back that takes an instance of the WeatherQueryInterface and returns 
// an instance WeatherDetailType. This callback is local to the routes file and
// doesn't need to be exported.
const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};

export {routeHello, routeAPINames, routeWeather};