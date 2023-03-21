import React from "react";

import classes from './Button.module.css';

const Button = props => {
    return (
    <button className={classes.button}
     type={props.type || 'button'} 
     onClick={props.onClick} >
        {props.children}
     </button>
    );
}

export default Button;
// exports the button component so that we can reuse it in other places within the app

// set the type of the button so that it can be set from outside where we use out button component, making the component dynamic

// incase it can't be set, we use the or opperator for the value 'button'