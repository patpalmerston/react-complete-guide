import React, { Component } from 'react';
import Auxillary from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';

import classes from './Person.css';

class Person extends Component {
    constructor() {
        super();
    }
    // you can render an array of multiple elements without the parent div, but each array should have a key
    render() {
        console.log('[Person.js] rendering...');
        return (
            // instead of using Auxillary we can use the built in Fragment HOC
            <Auxillary>
                <p key='i1' onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key='i2'>{this.props.children}</p>
                <input
                    key='i3'
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Auxillary>
        );
    }
}

export default withClass(Person, classes.Person);
