import React from 'react';
import TaskElem from './TaskElem';

const TodoList = ({ tasks, dispatch }) => {
    if(tasks.length != 0) {
        return (
            <div>
                {tasks.map(elem => {
                    return <TaskElem task={elem} dispatch={dispatch} />
                })}
            </div>
        )
    } else {
        return (
            <div>
                <h1>Задач нет</h1>
            </div>
        )
    }
}

export default TodoList;