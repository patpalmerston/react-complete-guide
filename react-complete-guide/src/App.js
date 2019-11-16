import React, { Component } from 'react';
import Person from './person/Person';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            persons: [
                { name: 'Max', age: 29, hobbies: 'Racing' },
                { name: 'Manu', age: 28, hobbies: 'lifting' },
                { name: 'Steph', age: 26, hobbies: 'growing' }
            ]
        };
    }
    render() {
        console.log(this.state);
        return (
            <div className='App'>
                <h1>Hi I'm a React App</h1>
                <button>Switch Name</button>

                {this.state.persons.map((x, i) => (
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
    }
}

export default App;
