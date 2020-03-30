import React from 'react';

function TodoForm(props) {
    return (
        <div>
            <div>TodoForm</div>
            <form onSubmit={props.addItem}>
                <input type='text' placeholder='Enter Task' />
                <button type='submit'>add</button>
            </form>
        </div>
    );
}

export default TodoForm;
