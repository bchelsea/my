import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { white } from 'color-name';


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
        { name: 'Helen', age: 25 }
      ]
    });
    console.log('name change handler triggered');
  };

    render() {

      const style = {
        backgroundColor: '#282828',
        font: 'inherit',
        color: 'white',
        border: '2px solid  #323232',
        padding: '8px',
        cursor: 'pointer',
        margin: '8px',
        boxShadow: '0px 2px 3px #595959',
        textShadow: '1px 3px 3px #595959',
      };



     return (
      <div className="App">
      <h1>Refresher React APP</h1>
      <p>little refresher app with click and event handlers :-)</p> 

      <button 
      style={style}
      onClick={ () => this.switchNameHandler('CHEEEEEEELS') }>Switch Name</button>
      
      <div className='Container'>
      
      <Person
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age} />

      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this, 'CHELSEA 2')} 
      changed={this.nameChangedHandler} 
      > My Hobbies: Crafting
      </Person>
      
      <Person
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age} />
      
      </div>
      </div>
    )
   //return React.createElement('div',{className: 'App'},React.createElement('h1', null, 'DOes this work now'));
  
     }
}

export default App;



