import React from 'react';
import Person from './person/Person';

const Persons = props =>
    props.persons.map((x, i) => {
        console.log('x', x);
        return (
            <Person
                click={props.clicked(i)}
                name={x.name}
                age={x.age}
                key={x.id}
                changed={e => props.changed(e, x.id)}
            />
        );
    });

export default Persons;
