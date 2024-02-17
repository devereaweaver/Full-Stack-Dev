/* This is neat, by creating a subdirectory in the pages directory, 
 * Next.js will automatically create a nested routed. F**k*n cool.
 *
 * In this example page, we'll recreate the weather component to 
 * serve it up.
 */

import type {NextPage} from "next";
import React, {useState, useEffect} from "react";

/* Create a JSX element that implements the WeatherProps interface */
const PageComponentWeather: NextPage = () => {
    interface WeatherProps {
        weather: string;
    }

    const WeatherComponent = (props: WeatherProps) => {
        const [count, setCount] = useState(0);
        useEffect( () => {setCount(1);}, []);

        return (
            <h1 onClick={() => setCount(count + 1)}>
                The weather is {props.weather}, 
                and the counter show {count}
            </h1>
        );
    };

    return (<WeatherComponent weather="sunny"/>);
};

export default PageComponentWeather;