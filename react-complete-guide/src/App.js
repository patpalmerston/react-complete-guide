import React, { Component } from 'react';
import Person from './person/Person';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Hi I'm a React App</h1>
                <Person />
            </div>
        );
    }
}

export default App;
