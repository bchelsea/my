import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const[personState, setPersonsState] = useState({
    persons: [
     { name: 'Chelsea', age: 26 },
     { name: 'John', age: 29 },
     { name: 'Helen', age: 25 },
   ],
   SomeOtherState: 'This is sample text'
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Chels', age: 26 },
        { name: 'John', age: 29 },
        { name: 'Hellz', age: 25 }
      ]
    });
 console.log('was clicked');
  };

     return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>this is working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Crafting</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      <Person/>
      </div>
    )
   //return React.createElement('div',{className: 'App'},React.createElement('h1', null, 'DOes this work now'));
}

export default App;



