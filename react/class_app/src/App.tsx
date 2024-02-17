/* The following React app is an illustration of using a class component. 
 * We can use class components to create a JSX element instead of a 
 * functional component like we've been using 
 */
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";
import React from "react";

export default function App() {
  interface WeatherProps {
    weather: string;
  }

  type WeatherState = {
    count: number;
  }

  class WeatherComponent extends React.Component<WeatherProps, WeatherState> {
    // Build a WeatherComponent with an internal counter that changes each 
    // time the on screen component is clicked. 
    constructor(props: WeatherProps) {
      super(props);    
      this.state = {
        count: 0
      };
    }

    componentDidMount() {
      // Set the internal counter to 1 when the component is added to the screen
      this.setState({count: 1});
    }

    clickHandler(): void {
      // Increment the internal counter each time the component is clicked
      this.setState({count: this.state.count + 1});
    }

    render() {
      // Return the JSX element
      return (
        <h1 onClick={() => this.clickHandler()}>
          This weather is {this.props.weather}, and the counter shows {" "} {this.state.count}
        </h1>
      )
    }
  }

  return (<WeatherComponent weather="sunny"/>);
}