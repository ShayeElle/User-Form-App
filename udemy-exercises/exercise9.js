import Todo from './Todo';
import './styles.css';
 
const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];
 
// don't change the Component name "App"
export default function App() {
    return (
        <ul>
          {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
        </ul>
    );
}

//Todo.js file

import React from 'react';
 
export default function Todo(props) {
    return <li>{props.text}</li>;
}





// map method: and what this method does, is that it creates a new array based on another array, and that basically transforms every element in that original array

//DUMMY_TODOS array is a constant that contains three strings representing tasks to be done

//Inside the return statement, a list is created with the <ul> tag, and the map() method is used to loop through the DUMMY_TODOS array and create a new Todo component for each task

//text prop is passed to each Todo component, which will display the task name as a prop in the Todo component

//Finally, the component returns the unordered list with each Todo component inside as a list item

//The props argument is an object that contains all the properties that are passed to this component from its parent component

// the props.text property is used to display the task name as a list item using the <li> tag and the component returns the list item with the text prop passed as its content