import React from 'react';
import { editTaskValueAction, addTaskAction, searchTasksAction, searchTasksChangeAction } from '../todoReducer';
import Styles from './header.module.css';

const todoHeader = ({ inputVal, dispatch }) => {
    let input = React.createRef();

    const changeText = () => {
        const text = input.current.value;
        dispatch(editTaskValueAction(text));
    } 

    const addTask = () => {
        dispatch(addTaskAction());
    }

    const searchTasksChange = () => {
        dispatch(searchTasksAction());
    }

    return (
        <div className={Styles.todoHeader}>
            <h1>Todo App</h1>
            <textarea type="text" ref={input} onChange={changeText} value={inputVal} placeholder="Task title..." />
            <button onClick={addTask}>Add new task</button>
        </div>
    )
}

export default todoHeader;