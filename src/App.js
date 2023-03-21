import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'; //import AddUser file
import UsersList from './components/Users/UsersList';

function App() {
 const[usersList, setUsersList]= useState([]);

 const addUserHandler = (uName, uAge) => {
  setUsersList((prevUsersList) => {
    return[...prevUsersList, 
      { name: uName, age: uAge, id: Math.random().toString() },
    ];
  });
};

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;

// but we have a function that allows us to change to the array and then that change would trigger that App component to be rendered,and hence the UsersList  component would be updated as well because it would all also be rendered since it's part of the App component

// [...] is a spread operater 

// addUserHandler function is defined to handle the user input when a new user is added through the AddUser component

// addUserHandler uses the setUsersList function to update the usersList state by adding a new object containing the user's name, age, and id to the array of previous users collected
