import React, { PureComponent } from 'react';
import Person from './person/Person';

// PureComponent has a build in shouldComponentUpdate mecanism inside it
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] get DerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillRecieveProps', props)
    // }

    // checking for the props and only updating when props connected to this component are used, saved on performance. So that every time app is re rendered it will not trigger the persons component
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (
    //         // checking to see if any of the props were changed. If not we dont need to update component, if yes, then the component will update.

    //         // not needed if we use a pure component
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

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
