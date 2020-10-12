import React from 'react';
import Styles from './taskElem.module.css'
import { changeTaskCompleteAction, deleteTaskAction, editTaskTitleAction, changeEditTaskActiveAction } from '../todoReducer';

const TaskElem = ({ task, dispatch }) => {
    let id = task.id;
    let title = React.createRef();

    const changeTaskComplete = () => {
        dispatch(changeTaskCompleteAction(id));
    }

    const deleteTask = () => {
        dispatch(deleteTaskAction(id));
    }

    const editTaskTitle = () => {
        dispatch(editTaskTitleAction(title.current.value, id));
    }

    const editActive = () => {
        dispatch(changeEditTaskActiveAction(id));
    }

    let taskComplete = null, editTaskElem = null;

    if (task.editActive) {
        editTaskElem = (
            <div className={Styles.buttons}>
                <button className={Styles.edit} onClick={editActive}><img src={require('./success.svg')} /></button>
                <button className={Styles.del} onClick={deleteTask}><img src={require('./delete.svg')} /></button>
            </div>
        );
    } else {
        editTaskElem = (
            <div className={Styles.buttons}>
                <button className={Styles.edit} onClick={editActive}><img src={require('./pencil_white.svg')} /></button>
                <button className={Styles.del} onClick={deleteTask}><img src={require('./delete.svg')} /></button>
            </div>
        );
    }

    if (task.complete) {
        taskComplete = (
            <div className={Styles.row}>
                <input type="checkbox" checked onChange={changeTaskComplete} />
                <h1 onClick={editActive}>{task.title}(Выполнено)</h1>
            </div>
        );
    } else {
        taskComplete = (
            <div className={Styles.row}>
                <input type="checkbox" onChange={changeTaskComplete} />
                <h1 onClick={editActive}>{task.title}(Не выполнено)</h1>
            </div>
        );
    }

    if (task.editActive) {
        taskComplete = (
            <div className={Styles.row}>
                <p>Смена названия задачи:</p>
                <input type="text" ref={title} onChange={editTaskTitle} value={task.title} />
            </div>
        );
    }

    return (
        <div className={Styles.task}>
            <div>
                {taskComplete}
            </div>
            { editTaskElem}
        </div>
    )
}

export default TaskElem;