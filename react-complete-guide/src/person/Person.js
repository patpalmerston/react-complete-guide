import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = props => {
    console.log('props', props);
    const style = {
        '@media(min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className='person' style={style}>
            <p onClick={props.delete}>
                I'm {props.name} and I am {props.age} years o ld
            </p>
            <div>{props.children}</div>
            <input type='text' onChange={props.input} />
        </div>
    );
};

export default Radium(person);
