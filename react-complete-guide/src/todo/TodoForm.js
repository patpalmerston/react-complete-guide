import React from 'react';

function TodoForm() {
    return (
        <div>
            <div>TodoForm</div>
            <form action='#'>
                <input type='text' placeholder='Enter Task' />
                <button type='submit'>add</button>
            </form>
        </div>
    );
}

export default TodoForm;
