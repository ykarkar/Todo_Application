import { createStore, combineReducers } from 'redux';
import {todos} from './todos/reducers';

const reducers ={
    todos,
};

//put our reducers in a form that we can pass the create store function
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);