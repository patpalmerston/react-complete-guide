import React from 'react';
import './User.css';

const ParaInput = props => {
    const { eventHandler, value } = props;
    return (
        <div className='card'>
            <div>Para</div>
            <input type='text' onChange={eventHandler} value={value} />
        </div>
    );
};

export default ParaInput;
