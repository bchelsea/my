import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {name: 'Chelsea', age: 26},
      {name: 'John', age: 29},
      {name: 'Helen', age: 25},
    ] 
  }

  switchNameHandler

  render() {
     return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>this is working</p>
      <button onClick={}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Crafting</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      <Person/>
      </div>
    )
   //return React.createElement('div',{className: 'App'},React.createElement('h1', null, 'DOes this work now'));
  }
}

export default App;
