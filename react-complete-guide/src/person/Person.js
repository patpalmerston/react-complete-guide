import React from 'react';
import Radium from 'radium';

const person = props => {
    console.log('props', props);
    return (
        <div className='person'>
            <p onClick={props.delete}>
                I'm {props.name} and I am {props.age} years o ld
            </p>
            <div>{props.children}</div>
            <input type='text' onChange={props.input} />
        </div>
    );
};

export default Radium(person);
