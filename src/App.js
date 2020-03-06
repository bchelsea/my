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

      const style = {
        backgroundColor: 'lightblue',
        font: 'inherit',
        border: '2px solid lightblue',
        padding: '8px',
        cursor: 'pointer',
        margin: '8px',
        borderRadius: '15px',
        boxShadow: '3px 5px 7px blue',
        textShadow: '1px 3px 3px white',
      };


     return (
      <div className="App">
      <h1>Refresher React APP</h1>
      <p>litle refresher app with click and event handlers :-)</p> 
      <button 
      style={style}
      onClick={ () => this.switchNameHandler('CHEEEEEEELS') }>Switch Name</button>
      
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



