import React from 'react';

const CharComponent = props => {
    return (
        <div className='char' onClick={props.delete}>
            {props.letter}
        </div>
    );
};

export default CharComponent;
