import React, { Component } from 'react';
import Person from './person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] get DerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillRecieveProps', props)
    // }

    // checking for the props and only updating when props connected to this component are used, saved on performance. So that every time app is re rendered it will not trigger the persons component
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
    }

    // componentWillUpdate() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        // use code that needs to run before the component is removed
        console.log('[Persons.js] componentWillUnmount');
    }

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
