import React from 'react';
import Person from './Person.css';

const person = (props) => {
    return (
        (<div className ='Person'>
        <p className='Paragraph' onClick={props.click}> i'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type ="text" className='TextBox' onChange={props.changed} value={props.name}/>
        </div>
        )
    )
}

export default person;

