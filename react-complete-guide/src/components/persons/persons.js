import React, { Component } from 'react';
import Person from './person/Person';

class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] get DerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
    }

    componentDidMount() {}

    render() {
        return this.props.persons.map((x, i) => {
            console.log('x', x);
            return (
                <Person
                    click={() => this.props.clicked(i)}
                    name={x.name}
                    age={x.age}
                    key={x.id}
                    changed={e => this.props.changed(e, x.id)}
                />
            );
        });
    }
}

export default Persons;
