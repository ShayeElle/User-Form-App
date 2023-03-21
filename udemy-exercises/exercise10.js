import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [isDeleting, setIsDeleting] = React.useState(false);
    
    function deleteHandler() {
        setIsDeleting(true);
    }
    
    function proceedHandler() {
        setIsDeleting(false);
    }
    
    let warning;
    
    if (isDeleting) {
        warning = (
            <div id="alert">
              <h2>Are you sure?</h2>
              <p>These changes can't be reverted!</p>
              <button onClick={proceedHandler}>Proceed</button>
            </div>
        );
    }
    
    return (
      <div>
        {warning}
        <button onClick={deleteHandler}>Delete</button>
      </div>    
    );
}


// renders a warning message and a button

// the button returns a message that asks the user if they are sure that they want to delete something

// useState hook from React is used to manage the component's state

// isDeleting state variable is initially set to false, and it is used to determine whether or not the warning message should be displayed

// deleteHandler function is called when the "Delete" button is clicked, and it sets the isDeleting state variable to true, which causes the warning message to display

//proceedHandler function is called when the "Proceed" button is clicked, and it sets the isDeleting state variable back to false