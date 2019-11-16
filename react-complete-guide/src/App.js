import React, { Component } from 'react';
import Person from './person/Person';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Hi I'm a React App</h1>
                <Person name='Mac' age='28' />
                <Person name='mike' age='18'>
                    {' '}
                    Hobbies: Racing
                </Person>
                <Person name='jill' age='38' />
            </div>
        );
    }
}

export default App;
