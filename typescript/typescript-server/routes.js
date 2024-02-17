/* routes.ts - contains the functionality the gets executed when a client makes
 * a request for some endpoint; this version of our routes file will contain type
 * annotations
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
import fetch from "node-fetch";
// Create a route for the hello endpoint with a type annotation
const routeHello = () => "Hello, World!";
// Create a route for the names endpoint that returns the user id and the names
const routeAPINames = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data; // our custom type that contains an id and name property
    try {
        const response = yield fetch(url);
        data = (yield response.json());
    }
    catch (err) {
        return "Error";
    }
    // Parse the data after retrieving it and converting it to JSON
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");
    return names;
});
// Create routes for the new weather endpoints. This callback takes an 
// instance of the WeatherQueryInterface and returns an instance of the 
// WeatherDetailType 
const routeWeather = (query) => queryWeatherData(query);
// Call back that takes an instance of the WeatherQueryInterface and returns 
// an instance WeatherDetailType. This callback is local to the routes file and
// doesn't need to be exported.
const queryWeatherData = (query) => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35
    };
};
export { routeHello, routeAPINames, routeWeather };
