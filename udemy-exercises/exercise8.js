import React from 'react';
 
import './styles.css';
 
// don't change the Component name "App"
export default function App() {
    const [counter, setCounter] = React.useState(0);
    
    function incrementCounterHandler() {
        setCounter(prevCounter => prevCounter + 1);
    }
    
    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={incrementCounterHandler}>Increment</button>
      </div>
    );
}

//the useState hook is used to initialize the state of the component with a counter variable starting at 0

// The incrementCounterHandler function is called when the "Increment" button is clicked, which updates the state of the counter variable to increment by 1 using the setCounter function.

//the component returns a JSX element that displays the current value of the counter variable and a button with an onClick event that triggers the incrementCounterHandler function when clicked. 