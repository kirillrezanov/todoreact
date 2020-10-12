const ADD_NEW_TASK = "ADD_NEW_TASK";
const EDIT_TASK_INPUT_VALUE = "EDIT_TASK_INPUT_VALUE";
const CHANGE_TASK_COMPLETE = "CHANGE_TASK_COMPLETE";
const DELETE_TASK = "DELETE_TASK";
const EDIT_TASK_TITLE = "EDIT_TASK_TITLE";
const EDIT_TASK_ACTIVE = "EDIT_TASK_ACTIVE";
const TASKS_SEARCH = "TASKS_SEARCH";
const TASKS_SEARCH_EDIT = "TASKS_SEARCH_EDIT";

const initialState = {
    taskInputValue : "",
    tasks : [
        { id : 1, title : "Test" }
    ],
    searchTasks : [],
    searchTasksActive : false
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK : 
            let taskText = state.taskInputValue;
            if(taskText != "") {
                if(state.tasks.length != 0) {
                    let lastElem = state.tasks[0].id;
                    let newTask = {
                        id : lastElem + 1,
                        title : taskText,
                        complete : false,
                        editActive : false
                    };
                    state.tasks = [{...newTask}, ...state.tasks];
                } else {
                    let newTask = {
                        id : 1,
                        title : taskText,
                        complete : false,
                        editActive : false
                    };

                    state.tasks = [{...newTask}, ...state.tasks];
                }
            }
            state.taskInputValue = "";
            return state;
        case EDIT_TASK_INPUT_VALUE :
            state.taskInputValue = action.message;
            return state;
        case CHANGE_TASK_COMPLETE :
            state.tasks.map(elem => {
                if(elem.id == action.id) {
                    elem.complete = !elem.complete;
                }
            });
            return state;
        case DELETE_TASK : 
            state.tasks = state.tasks.filter(elem => {
                console.log(elem.id, action.id);
                return elem.id != action.id
            });
            let id = state.tasks.length;
            state.tasks.map(elem => {
                elem.id = id;
                id--;
            });
            return state;
        case EDIT_TASK_TITLE :
            state.tasks.forEach(elem => {
                if(elem.id == action.id) {
                    elem.title = action.title;
                }
            });
            return state;
        case EDIT_TASK_ACTIVE :
            state.tasks.forEach(elem => {
                if(elem.id == action.id) {
                    elem.editActive = !elem.editActive;
                }
            });
            return state;
        case TASKS_SEARCH :

            return state;
        case TASKS_SEARCH_EDIT :
            state.searchTasksActive = !state.searchTasksActive;
            return state;
        default : return state;
    }

}

export const editTaskValueAction = (message) => {
    return {
        type : EDIT_TASK_INPUT_VALUE,
        message : message
    }
}

export const addTaskAction = () => {
    return {
        type : ADD_NEW_TASK
    }
}

export const changeTaskCompleteAction = id => {
    return {
        type : CHANGE_TASK_COMPLETE,
        id : id
    }
}

export const deleteTaskAction = id => {
    return {
        type : DELETE_TASK,
        id : id
    }
}

export const editTaskTitleAction = (title, id) => {
    return {
        type : EDIT_TASK_TITLE,
        title : title,
        id : id
    }
}

export const changeEditTaskActiveAction = id => {
    return {
        type : EDIT_TASK_ACTIVE,
        id : id
    }
}

export const searchTasksAction = s => {
    return {
        type : TASKS_SEARCH,
        s : s
    }
} 

export const searchTasksChangeAction = () => {
    return {
        type : TASKS_SEARCH_EDIT
    }
}

export default todoReducer;