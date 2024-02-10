/* TS allows for user-defined types. They're similar to objects.
 * One of the gotchas of TS is that by default, without any top-level 
 * imports or exports, the TS file is not considered a module. Thus, it runs
 * in global scope meaning all of the declarations are visible to other
 * modules in the global scope...which seems annoying...also why?
 */

// create a custom type
type WeatherDetailType = {
    weather: string,
    zipCode: string,
    temp?: number;    // is this an optional?...
}

// implement it (have to append with the 2 since weatherDetail was declared
// in another TS file that's not a module, thus it's visible here)
let weatherDetail2: WeatherDetailType = {
    weather: "sunny", 
    zipCode: "00000",
    temp: 30
};

// an example of using the the custom type in a callback as a parameter and
// as a return type
const getWeatherDetail = (data: WeatherDetailType): WeatherDetailType => data;