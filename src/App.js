import React, { Component } from 'react';
import './Css/Style.css'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="todoapp">
          <h3 className="todoapp-title">My Todolist</h3>
          <AddTodo /><hr/>
          <TodoList />
      </div>      
    );
  }
}

export default App;
