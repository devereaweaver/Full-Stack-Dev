/* A minimal example of a JSX expression used in a React app. */
import React from 'react';

export default function App() {

  // recall, an object that implements the interface must adhere to the interface definition
  interface WeatherProps {
    weather: string;
  }

  // Create an element to handle user mouse clicks that just opens an alert dialog.
  const clickHandler = (text: string): void => {
    alert(text);
  };

  // Create a React function component
  const WeatherComponent = (props: WeatherProps): JSX.Element => {
    const text = `The weather is ${props.weather}`;

    // return clickHandler element
    return (<h1 onClick={()=>clickHandler(text)}>{text}</h1>);    
  };

  // Render our element
  return (<WeatherComponent weather="sunny"></WeatherComponent>);
}