import React, { Component } from 'react';
import './App.css';
import UserOutput from './user/UserOutput';
import UserInput from './user/UserInput';
import Para from './user/ParaInput';

class App extends Component {
    constructor() {
        super();
        this.state = {
            username: 'pat',
            para: 'I am a paragraph'
        };
    }
    HeaderHandler = e => {
        console.log(e);
        e.preventDefault();
        this.setState({ username: e.target.value });
    };
    ParaHandler = e => {
        e.preventDefault();
        this.setState({ para: e.target.value });
    };
    render() {
        const username = this.state.username;
        const para = this.state.para;
        return (
            <div className='App'>
                <ol>
                    <UserOutput name={username} para={para} />
                    <UserInput
                        eventHandler={this.HeaderHandler.bind(this)}
                        value={username}
                    />
                    <Para
                        eventHandler={this.ParaHandler.bind(this)}
                        value={para}
                    />
                </ol>
            </div>
        );
    }
}

export default App;
