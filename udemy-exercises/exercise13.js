import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const clickHandler = () => {
        console.log('Clicked!');
    };
    
    return (
        <div>
          <h2>You're logged in!</h2>
          <p>Welcome to your user profile!</p>
          <button onClick={clickHandler}>Click me!</button>
        </div>
    );
}

// the divs need to start with lower case so that JSX can know that it is a html element

// onCLick needs to have a capital C

// built in html elements start with a lowercase letter. While custom components always start with a uppercase letter