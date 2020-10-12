import Redux, { combineReducers, createStore } from 'redux';
import todoReducer from './todoReducer';

const reducers = combineReducers({
    todo : todoReducer
})

const Store = createStore(reducers);

export default Store;