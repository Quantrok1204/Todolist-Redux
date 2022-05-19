import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import Footer from './Footer';
import { FILTER_ALL, FILTER_COMPLETED, FILTER_ACTIVE } from '../constants/filters';

const filteredTodos = (todos, filter) => {
    switch(filter) {
        case FILTER_ALL:
            return todos;
        case FILTER_COMPLETED:
            return todos.filter(todo => todo.completed);
        case FILTER_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filteredTodos(state.todos, state.filter),
        filter: state.filter
    }
}

const TodoList = ({todos, filter}) => {

    let message;
    if(todos.length === 0) {
        let text;
        switch(filter) {
            case FILTER_COMPLETED: text = 'Không có công việc.'; break;
            case FILTER_ACTIVE: text = 'Không có công việc.'; break;
            default: 
            break;
        }
        message = (<div className="">{text}</div>);
    }       

    return (
        <div>
            {message}
            <div className="todoList">
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                    />
                )}
            </div><hr/>
            <Footer todosLength={todos.length} filter={filter}/>
        </div>        
    );
}

export default connect(mapStateToProps)(TodoList);