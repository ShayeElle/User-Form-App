import React, { useState } from 'react';
import Button from '../UI/Button';
//Techincally dont need this code
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import classes from './AddUser.module.css';


const AddUser = (props) => {
    //create and define the addUserHandler function component
   const [enteredUsername, setEnteredUsername] = useState('');
   const [enteredAge, setEnteredAge] = useState('');
   const [error, setError] = useState();

    //updating the age on every key stroke
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and (non-empty values).'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (>0).'
            });
            return; //we ensure that age is a number greater than 1
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    } //The default is prevented

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
      <div>
        {error && (
        <ErrorModal
          title={error.title} 
          message={error.message} onConfirm={errorHandler}
        />
        )}

        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input 
                id='username' type='text'
                value={enteredUsername}
                onChange={usernameChangeHandler}/>

                <label htmlFor='age'>Age</label>
                <input 
                id='age' 
                type='text'
                value={enteredAge}
                onChange={ageChangeHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </div>
    );
};

export default AddUser;

// always export your component, so that you can reuse code somewhere else

// htmlFor is the prop name for assigning the For attribut

// addUserHandler is triggered when the form is submitted

// we can use state management to update the state with every keystroke and save what the user enters in such a state varibable

// we use array de-structuring and we use it, because useState always returns an array with exactly two elements

    // enteredUsername, this concept will hold the latest state snapshot
    // setEnteredUsername, holds a function which we can call, to change that state and to then trigger such a re-render cycle

// enteredAge is actually a string and not a number

// the values will be reflected in the inputs

//.trim removes any extra white space
