/* This is the sample implementation for a simple app we've been using, but this
 * time we're creating a JSX element with a function component and we're also 
 * using hooks instead of lifecycle methods to update the component. 
 * 
 * Hooks in web dev terms are functions that provide reusable behaviors which
 * are nice for creating simple, reusable interfaces. 
 * 
 * useState - used to manage the internal state of an element 
 * useEffect - used to handle side effects (messin around with the outside world)
 */
import React, {useState, useEffect} from "react";

export default function App() {

  interface WeatherProps {
    weather: string;
  }

  const WeatherComponent = (props: WeatherProps): JSX.Element => {
    // Function component to generate a JSX element

    // The useState hook to access the state of the component. This 
    // hook returns the state variable count as well as the function we 
    // need to modify the state of this guy, setCount(). Observe, we invoke
    // setCount when we want to change the state of the component which 
    // forces a re-render of the component to update the state.  
    const [count, setCount] = useState(0);

    // The useEffect hooks to the componentDidMount lifecycle method, thus
    // it executes the callback function once the component is mounted onscreen.
    // It runs after the component is mounted. It also has an optional return object
    // that is returned before the component is unmounted. Can be used for cleanup. 
    // In the callback we can place what we want to do when the component is mounted. 
    // It also has an optional array where we can place dependencies that it will listen
    // for and then update by rerunning itself as needed. 
    useEffect( () => {setCount(1)}, []);

    return (
      <h1 onClick={() => setCount(count + 1)}>
        The weather is {props.weather},
        and the counter shows {count}
      </h1>
    );
  };

  return (<WeatherComponent weather="sunny" />);
}