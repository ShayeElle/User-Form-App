import React from "react";

import classes from './Card.module.css'; //different from reular css

const Card = (props) => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;

// creating the Card component that we can continure to reuse within our code

// we create a div that outputs content that the card is wrapped around

// we use a Template literal to use both classes together

// props.children will give us that content which has passed between the opening and closing tag of the card component

// the class is applied to the div reflect both the card class and any incoming classes on the className prop of this card component. Basically to apply two CSS classes