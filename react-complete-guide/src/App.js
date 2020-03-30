import React, { Component } from 'react';
import Person from './person/Person';
import Todos from './todo/Todos';
import Radium, { StyleRoot } from 'radium';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            persons: [
                { id: 1, name: 'Max', age: 29, hobbies: 'Racing' },
                { id: 2, name: 'Manu', age: 28, hobbies: 'lifting' },
                { id: 3, name: 'Steph', age: 27, hobbies: 'growing' }
            ],
            showPersons: false
        };
    }

    switchNameHandler = props => {
        this.setState({
            persons: [
                { id: 1, name: 'Larry', age: 29, hobbies: 'making the' },
                { id: 2, name: 'scary', age: 28, hobbies: 'shit' },
                { id: 3, name: 'mary', age: 26, hobbies: 'happen' }
            ]
        });
    };

    nameChangedHandler = (e, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = { ...this.state.persons[personIndex] };

        person.name = e.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: [
                { id: 1, name: e.target.value, age: 29, hobbies: 'making the' },
                { id: 2, name: 'scary', age: 28, hobbies: 'shit' },
                { id: 3, name: 'mary', age: 26, hobbies: 'happen' }
            ]
        });
    };

    togglePersonsHandler = e => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    deletePersonHandler = personIndex => {
        //use slice to make a copy
        const persons = this.state.persons.slice();
        //or use spread to make copy
        // const person = [...this.state.person]
        //splice removes the item in a copy of state
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };
        let persons = null;
        if (this.state.showPersons === true) {
            persons = (
                <div>
                    {this.state.persons.map((x, i) => {
                        return (
                            <Person
                                name={x.name}
                                age={x.age}
                                input={e => this.nameChangedHandler(e, x.id)}
                                // option1
                                delete={this.deletePersonHandler.bind(this, i)}
                                // option2
                                // delete={() => this.deletePersonHandler(i)}
                                key={x.id}
                            />
                        );
                    })}
                </div>
            );
            style.backgroundColor = 'red';
            style.border = '2px solid black';
            style.color = 'black';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'white'
            };
        }

        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
            classes.join(' ');
        }

        return (
            <StyleRoot>
                <div className='App'>
                    <p className={classes.join(' ')}>Hi I'm a React App</p>
                    <button onClick={this.togglePersonsHandler} style={style}>
                        {' '}
                        TOGGLE
                    </button>
                    {persons}
                    <Todos />
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
