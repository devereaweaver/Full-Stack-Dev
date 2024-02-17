/* The custom.d.ts file contains the definitions for our custom types */

type responseItemType = {
    // Defines the response items of the async API call
    id: string;
    name: string;
};

// The following two types are needed for the weather routes we'll create
type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};

interface WeatherQueryInterface {
    zipcode: string;
}