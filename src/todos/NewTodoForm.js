import React, {useState } from 'react';
import { connect } from 'react-redux';
import { addTodoRequest} from './thunks';
import {getTodos, getTodosLoading} from './selecter';
import './NewTodoForm.css';


const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');

    return(
    <div className="new-todo-form">
        <input className="new-todo-input" 
               type="text"
               placeholder="Type Your New Todo"
               value={inputValue} 
               onChange={ e => setInputValue(e.target.value)} />
        <button 
        onClick={() => {
            const isDuplicateText = 
            todos.some(todo => todo.text === inputValue);
            if(!isDuplicateText){
                onCreatePressed(inputValue);
                setInputValue('');
            }
        }}
        className="btn waves-effect waves-light"> Create Todo</button>
    </div>
    )
    };
 
const mapStateToProps = state => ({
    todos: getTodos(state),
});

const mapDispatchedToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps,mapDispatchedToProps)(NewTodoForm);