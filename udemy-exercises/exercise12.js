import React from 'react';
 
// don't change the Component name "App"
export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
    
    function clickHandler() {
        setHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div>
            <p className={highlighted ? 'active' : ''}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}

// style prop, you should assign an object as a value - not a string

// setHighlighted() state updating function uses a function to set the new state

// the state changes whenever the button us clicked and is used to add CSS dynamically

// paragraph has a className that is dynamically set based on the state of "highlighted" variable

// the paragraph is rendered, its className is set to 'active' when the "highlighted" state is true, otherwise it is an empty string

// template literal constructs a string