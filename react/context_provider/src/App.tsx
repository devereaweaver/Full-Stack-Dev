/* Sometimes, we can't avoid having to deal with external state when dealing with 
 * our function components. In the cases where we need to deal with some shared global 
 * state, React implements the context provider to share global data with the tree of 
 * child components. 
 * 
 * We can use the context provider to access shared data with the useContext hook. 
 * Word of warning: React with re-render all child components when the global state
 * dependency is changed, thus it can be VERY expensive and shouldn't be used for 
 * datasets that change frequently. 
 * 
 * This implementation of our simple application shows how to use a context provider
 * to consume a theme through a context provider. 
 */

import React, {useState, createContext, useContext} from "react";

export default function App() {
  const ThemeContext = createContext("");

  const ContextComponent = (): JSX.Element => {
    // Initialize the theme constant to "dark" and return the function 
    // to mutate its state
    const [theme, setTheme] = useState("dark");

    return (
      <div>
        <ThemeContext.Provider value={theme}>
          <button onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}>
            Toggle theme
          </button>
          <Headline/>
        </ThemeContext.Provider>
      </div>
    );
  };

  const Headline = (): JSX.Element => {
    const theme = useContext(ThemeContext);
    return (<h1 className={theme}>Current theme: {theme}</h1>);
  };

  return (<ContextComponent/>);
}