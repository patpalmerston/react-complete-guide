import React from 'react';
import './User.css';

const UserInput = props => {
    const { eventHandler, value } = props;
    return (
        <div className='card'>
            <div>UserInput</div>

            <input type='text' onChange={eventHandler} value={value} />
        </div>
    );
};

export default UserInput;
