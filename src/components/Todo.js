import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteItem, } from '../actions';


const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => dispatch(toggleTodo(id)),
        deleteItem: (key) => dispatch(deleteItem(key)),
      }
  }

const Todo = ({id, text, onItemClick, deleteItem, idx}) => {
    return (
        <div className="toDoItem">
          <input className="check" 
            type="checkbox"
            checked={text.completed}
            key={id}
            onChange={(e) => onItemClick(id)}/>
          <input 
           type="text" value={text} />
          <span className="delete button"
            onClick={() => deleteItem(idx)}
          >✖</span>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Todo);