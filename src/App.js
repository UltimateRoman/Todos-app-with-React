import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/todos/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/todos/Addtodo';
import About from './components/pages/About';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get(`${url}?_limit=10`)
      .then(resp => this.setState({todos: resp.data}));
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  deltTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    axios.post(url, {
      title: title,
      completed: false
    })
      .then(resp => this.setState({ todos: [...this.state.todos, resp.data] }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Addtodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} 
                deltTodo={this.deltTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export default App;
