"use strict";
// Declaring types when variables are first declared can be considered 
// "over-typing", some argue to just use the compiler's type inference 
let weather = "snowy"; // over-typing
let betterWeather = "sunny"; // type inference, TSC knows it's a string
// You should always explicitly define the return type for a function 
function getWeatherNoArgs() {
    const weather = "sunny";
    return weather;
}
// The other place you should always explicitly set the type annotation is for
// a function's parameters, for obvious reasons. Also TS can't infer the types
// of function parameters since there isn't enough information.
const goodWeather = "sunny";
function getWeatherWithArgs(weather) {
    return weather;
}
;
let currentWeather = getWeatherWithArgs(goodWeather);
console.log(currentWeather);
