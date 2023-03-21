import React from "react";

import Card from "../UI/Card";
import classes from './UsersList.module.css'


const UsersList = (props) => {
    return (
    <Card className={classes.users}>    
        <ul>
            {props.users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.age} years old)
                </li>
            ))}
        </ul>
    </Card>
    );
};

export default UsersList;

// in the userList component we rely on props to get our actual array of users as data

// we use map method to map the array of users, queue and array of JSX elements. So to transform our user data to JSX elements which then are rendered onto the DOM 

// users is an array of user objects where every object has a name property and an age property

// we import Card inorder to wrap the list and style it. We have to still import it bc you need to import what you wanna use in a certain component into every component where you wanna use it