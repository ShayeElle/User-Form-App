import React from 'react';
 
// don't change the Component name "App"
export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
    
    function clickHandler() {
        setHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div>
            <p style={{color: highlighted ? 'red' : 'white'}}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}

// renders and a button that when it is clicked, the paragraph's text color is toggled between white and red

// set values dynamically in the style prop object via a ternary expression

// the paragraph is conditionally styled using the style attribute, which is set to an object with a color property

// useState hook's updater function is used to update the state variable based on its current value

// style prop, you should assign an object as a value - not a string

