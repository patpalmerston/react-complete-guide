import React from 'react';
import styled from 'styled-components';
import classes from './Cockpit.css';

const StyledButton = styled.button`
    background-color: ${props => (props.alt ? 'red' : 'green')};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${props => (props.alt ? 'salmon' : 'lightgreen')};
        color: black;
    }
`;

const Cockpit = props => {
    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
        classes.join(' ');
    }
    return (
        <div className={classes.Cockpit}>
            <p className={classes.join(' ')}>Hi I'm a React App</p>
            <StyledButton
                alt={this.state.showPersons}
                onClick={this.togglePersonsHandler}
            >
                {' '}
                TOGGLE
            </StyledButton>
        </div>
    );
};

export default Cockpit;
