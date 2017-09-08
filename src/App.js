import React from 'react';
import _ from 'lodash';
import './App.css';
import Header from './components/Header';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const todos = [
  {
    task: 'make React todo list',
    isCompleted: true
  }, {
    task: 'style todo list',
    isCompleted: true
  },{
    task: 'submit',
    isCompleted: true
  },{
    task: 'eat dinner',
    isCompleted: false
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div className="container appContainer">
        <div className="col-md-offset-3 col-md-6">
          <Header />
          <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
          <TodoList todos={this.state.todos} toggleTask={this.toggleTask.bind(this)} saveTask={this.saveTask.bind(this)} deleteTask={this.deleteTask.bind(this)}/>
          <Footer />
        </div>
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({todos: this.state.todos});
  }

  createTask(task) {
    this.state.todos.push({task, isCompleted: false});
    this.setState({todos: this.state.todos});
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({todos: this.state.todos});
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({todos: this.state.todos});
  }
}
