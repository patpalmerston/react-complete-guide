import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoTitle from './TodoTitle';

//Container Component
class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    addItemHandler = e => {
        // need to get the index/id of the todo to be changed
        this.setState({
            todos: [{}]
        });
    };

    render() {
        let todos = null;
        todos = (
            <div>
                {this.state.todos.map((x, i) => {
                    console.log('todos', x.task);
                    return <Todo task={x.task} />;
                })}
            </div>
        );
        return (
            <div>
                <TodoTitle />
                <TodoForm />
                {todos}
            </div>
        );
    }
}

export default Todos;
