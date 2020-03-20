import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
    constructor() {
        super();
        this.state = {
            length: 0,
            char: ''
        };
    }

    getLength = e => {
        this.setState({
            length: e.target.value.length,
            char: e.target.value
        });
    };

    deleteChar = charIndex => {
        const deleteThisChar = this.state.char.split('');
        console.log('delete this', deleteThisChar, 'index', charIndex);
        deleteThisChar.splice(charIndex, 1);
        const updatedChar = deleteThisChar.join('');
        this.setState({
            char: updatedChar
        });
    };
    render() {
        const length = this.state.length;
        const char = [...this.state.char];

        return (
            <div className='App'>
                <input type='text' onChange={this.getLength} />

                <ValidationComponent length={length} />

                {char.map((x, i) => {
                    return (
                        <div
                            style={{
                                display: 'inline-block',
                                padding: '16px',
                                textAlign: 'center',
                                margin: '16px',
                                border: '1px solid black'
                            }}
                            key={i}
                        >
                            <CharComponent
                                letter={x}
                                delete={() => this.deleteChar(i)}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;
