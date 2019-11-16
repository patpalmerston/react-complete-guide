import React from 'react';

const person = props => {
    return (
        <div className='person'>
            <p>
                I'm {props.name} and I am {props.age} years old
            </p>
            <div>{props.children}</div>
        </div>
    );
};

export default person;
