import React, { useState } from 'react';
import Person from './person/Person';
import './App.css';

const App = () => {
    const [personState, setPersonState] = useState({
        persons: [
            { name: 'Max', age: 29, hobbies: 'Racing' },
            { name: 'Manu', age: 28, hobbies: 'lifting' },
            { name: 'Steph', age: 27, hobbies: 'growing' }
        ]
    });

    const [show, setShow] = useState(true);

    const switchNameHandler = props => {
        setShow(!show);
        {
            !show
                ? setPersonState({
                      persons: [
                          { name: 'Larry', age: 29, hobbies: 'making the' },
                          { name: 'scary', age: 28, hobbies: 'shit' },
                          { name: 'mary', age: 26, hobbies: 'happen' }
                      ]
                  })
                : setPersonState({
                      persons: [
                          { name: 'Max', age: 29, hobbies: 'Racing' },
                          { name: 'Manu', age: 28, hobbies: 'lifting' },
                          { name: 'Steph', age: 26, hobbies: 'growing' }
                      ]
                  });
        }
    };

    return (
        <div className='App'>
            <h1>Hi I'm a React App</h1>
            <button onClick={switchNameHandler}> SwitchName</button>
            {personState.persons.map((x, i) => (
                <div key={i}>
                    {
                        <Person name={x.name} age={x.age}>
                            {' '}
                            <h6>Hobbies: {x.hobbies}</h6>
                        </Person>
                    }
                </div>
            ))}
        </div>
    );
};

export default App;

// constructor() {
//     super();
//     this.state = {
//         persons: [
//             { name: 'Max', age: 29, hobbies: 'Racing' },
//             { name: 'Manu', age: 28, hobbies: 'lifting' },
//             { name: 'Steph', age: 26, hobbies: 'growing' }
//         ]
//     };
// }
