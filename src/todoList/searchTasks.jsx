import React from 'react';

const TodoList = () => {
    return (
        <div>
            <input type="text"/>
            <button onClick={searchTasksChange}>Search task</button>
        </div>
    )
}

export default TodoList;