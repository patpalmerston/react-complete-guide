import React from 'react';
import styled from 'styled-components';

import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = props => {
    console.log('props', props);
    const style = {
        '@media(min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        // <div className='person' style={style}>
        <StyledDiv>
            <p onClick={props.delete}>
                I'm {props.name} and I am {props.age} years o ld
            </p>
            <div>{props.children}</div>
            <input type='text' onChange={props.input} />
        </StyledDiv>
    );
};

export default person;
