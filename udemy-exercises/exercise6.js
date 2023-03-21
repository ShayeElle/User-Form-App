import React, { useState } from 'react';


import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {

const [price, setPrice] = React.useState()(100);

    function clickHandler(){
        setPrice(75);
    }
    
    return (
        <div>
            <p>{price}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
}

// We add an event listener to listen for clicks

// useState() Hook returns an array with exactly two elements

// useState = This is a function provided by the React library and this function allows us to define values as state where changes to these values should reflect in the component function being called again