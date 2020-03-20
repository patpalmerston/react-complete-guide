import React from 'react';

const ValidationComponent = ({ length }) => {
    console.log('validate props', length);
    if (length < 5) {
        return (
            <div className='short'>
                <h4>Text to Short!</h4>
            </div>
        );
    } else {
        return (
            <div className='validate'>
                <div>Text Long enough!</div>
            </div>
        );
    }
};

export default ValidationComponent;
