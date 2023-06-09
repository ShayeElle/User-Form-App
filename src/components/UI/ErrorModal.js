import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}/>
     <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.conent}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
     </Card>
     </div>
    );
};


export default ErrorModal;

// We are creating a modal which is an overlay box for our error messages

// In the AddUser component, we use error modal, so here we now need to add this new onConfirm prop 