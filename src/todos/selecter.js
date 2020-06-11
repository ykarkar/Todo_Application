import {createSelector } from 'reselect';

export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;


export const getIncompleteTodos = createSelector(
    getTodos,
    getTodosLoading,
    (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted),
);

// export const getCompletedtodos = state => {
//  const {data: todos } = state.todos;
//  return todos.filter(todo => todo.isComplete);
// }
    