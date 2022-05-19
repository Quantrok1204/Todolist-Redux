import { ADD_TODO, SET_FILTER, TOGGLE_TODO, CLEAR_TODOS, 
         SELECTALL_TODO, DELETE_ITEM} from '../constants/action-types';

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

export const clearTodos = () => ({
    type: CLEAR_TODOS
});


export const selectAllTodos = (id) => ({
    type: SELECTALL_TODO,
    id
});

export const deleteItem = (key) => ({
    type: DELETE_ITEM,
    payload: key
});