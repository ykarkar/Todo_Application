import React from 'react';
import './TodoListItem.css';

const TodoListItem = ( {todo, onRemovePressed , onCompletedPressed} ) => (

    <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title"> {todo.text} </span>        
          <p>
            Created at: &nbsp;
            {(new Date(todo.createdAt)).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
        {todo.isCompleted
        ? null
        : <button className="waves-effect waves-light btn-small" onClick={() => onCompletedPressed(todo.id)} >Mark As Completed</button>   }
            <button  onClick={()=> onRemovePressed(todo.id)}
                     className="waves-effect waves-light btn-small">Remove</button>
        </div>
      </div>
    </div>
  </div>

); 
 
export default TodoListItem;