
    // App.js file:

    import React from 'react';
    import ExerciseComponent from './ExerciseComponent';

    // don't change the Component name "App"
    export default function App() {
        return <ExerciseComponent></ExerciseComponent>;
    }

    // ExerciseComponent.js file:

    import React from 'react';
    // Todo: Add your component code
    // Important: Use export default function MyCmp() { ... }, don't define "export default" on a separate line!
    function ExerciseComponent(){
        return <h1> First exercise - done! </h1>
    }

    // export default ExerciseComponent;


    // We have to always export our components and they have to start with an uppercase letter