import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
     { name: 'Chelsea', age: 26 },
     { name: 'John', age: 29 },
     { name: 'Helen', age: 25 },
   ],
   otherState: 'Some other value'
  };


  switchNameHandler = (newName) => {
    //console.log('this was clicked');
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'John', age: 29 },
        { name: 'Hellz', age: 25 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState ( {
      persons: [
        { name: 'Chelsea', age: 26 },
        { name: event.target.value, age: 29 },
        { name: 'Hellz', age: 25 }
      ]
    });
    console.log('name change handler triggered');
  };

    render() {
     return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>this is working</p> 
      <button onClick={ () => this.switchNameHandler('CHEEEEEEELS') }>Switch Name</button>

      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/>

      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, 'CHELSEA 2')} 
      changed={this.nameChangedHandler} 
      > My Hobbies: Crafting
      </Person>

      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/>
      <Person/>

      </div>
    )
   //return React.createElement('div',{className: 'App'},React.createElement('h1', null, 'DOes this work now'));
     }
}

export default App;



