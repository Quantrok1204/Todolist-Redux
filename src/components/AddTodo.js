import React from 'react';
import { connect } from 'react-redux';
import { v1 as uuid } from "uuid"; 
import { CgPlayListCheck } from "react-icons/cg";
import { addTodo } from '../actions';
import { selectAllTodos } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (todo) => dispatch(addTodo(todo)),
        onChangeTodo: () => dispatch(selectAllTodos())
    }
}



const AddTodo = ({onSubmit, onChangeTodo}) => {
    let input; 

    return (
        <div className="toDoMain">
            <form onSubmit={e => { 
                e.preventDefault();
                const id = uuid();
                  if(input.value.trim()) {
                    onSubmit({
                          text: input.value,
                          completed: false,
                          id,
                    });
                      input.value = '' } 
                  }}>
                <label>
                  <input className="input" type="text" 
                      placeholder="  Add New Todo..." 
                      ref={node => { input = node }} />
                  <input type="submit" value="Add"/>
                </label><hr />
                <input className="select" type="checkbox"
                onClick={onChangeTodo} />
            <label className="selectall">Select <CgPlayListCheck/></label>
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(AddTodo);