import React from 'react';

const person = props => {
    return (
        <div className='person'>
            I'm {props.name} and I am {props.age} years old
        </div>
    );
};

export default person;
