import React, { Component } from 'react';
import './App.css';
import Header from './Components/layout/Header';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Take out the trash',
				completed: false
			},
			{
				id: 2,
				title: 'Dinner with wife',
				completed: false
			},
			{
				id: 3,
				title: 'Meeting with boss',
				completed: false
			}
		]
	}

	// Toggle Completed
	markComplete = (id) => {
		this.setState({ todos: this.state.todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo;
 		}) });
	}

	delTodo = (id) => {
		this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)] });
	}

	addTodo = (title) => {
		const newTodo = {
			id: Math.random(),
			title,
			completed: false
		}
		this.setState({ todos: [...this.state.todos, newTodo] });
	}
 
	render () {
		return (
			<div className="App">
				<Header />
				<AddTodo addTodo={ this.addTodo } />
				<Todos todos={ this.state.todos } markComplete={ this.markComplete } delTodo={ this.delTodo } />
			</div>
		)
	}
} 

export default App;
