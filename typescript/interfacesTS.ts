/* In TS an interface is a way to describe the shape of some data, such as
 * the properties of an object..."Which properties does this object have?" 
 * So, in TS types and interfaces are actually not too distinct. 
 * Use an interface to define a new object or the method of an object. 
 * Generally, prefer interfaces over types since they provide more precise
 * error messages from TSC. 
 */

// E.g. Using the interface keyword to create a new interface.
interface WeatherProps {
    weather: string, 
    zipcode: string, 
    temp?: number;
}

const weatherComponent = (props: WeatherProps): string => props.weather;

// Ngl, idk wtf to do with this...