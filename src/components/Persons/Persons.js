import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {
    /* static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
    } */

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate'); 
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('[Persons.js] componentDidUpdate')
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
            name={person.name} 
            age={person.age} 
            click={() => this.props.clicked(index)}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} 
            />
        } );
    } 
};

export default Persons;
