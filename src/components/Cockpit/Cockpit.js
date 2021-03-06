import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.Red); //class will be ['red']
    } 
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.Bold); //class will be ['red', 'bold'] the join(' ') is used on the class to make the className red bold
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;