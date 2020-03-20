import React from 'react';
import './User.css';

const UserOutput = props => {
    const { name, para } = props;
    return (
        <div className='card'>
            <div>{name}</div>
            <p>{para}</p>
        </div>
    );
};

export default UserOutput;
