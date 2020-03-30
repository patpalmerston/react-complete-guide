import React from 'react';

//Presentational Component
function Todo(props) {
    return (
        <div>
            <div>{props.task}</div>
        </div>
    );
}

export default Todo;
