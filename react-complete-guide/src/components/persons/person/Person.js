import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auxillary from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';

import classes from './Person.css';

class Person extends Component {
    componentDidMount() {
        this.inputElement.focus();
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
                    // you can add special ref key word to isolate the element
                    ref={(inputEl) => {
                        this.inputElement = inputEl;
                    }}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Auxillary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
