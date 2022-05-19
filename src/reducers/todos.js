import { ADD_TODO, TOGGLE_TODO, CLEAR_TODOS, DELETE_ITEM, } from '../constants/action-types';

const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

const todos = (state = storedTodos, action) => {
    switch (action.type) {
        case ADD_TODO:
            localStorage.setItem('todos', JSON.stringify([...state, action.payload]));
            return [...state, action.payload];
        
        case CLEAR_TODOS:
            localStorage.removeItem('todos');
            return [];

        case TOGGLE_TODO:
            const toggleTodos = state.map(todo => {
                        if (todo.id === action.id) 
                            return Object.assign({}, todo, { completed: !todo.completed });                    
                        return todo;
                    }
                );
            localStorage.setItem('todos', JSON.stringify(toggleTodos));
            return toggleTodos;

        case DELETE_ITEM:
            const deleteTodo = state.todo.filter((todo, idx) => idx !== action.payload);
            localStorage.setItem('todos', JSON.stringify(deleteTodo));
                return deleteTodo;

        default:
            return state;
    }
}

export default todos;