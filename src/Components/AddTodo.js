import React, { Component } from 'react';

class AddTodo extends Component {

	state = {
		title: ''
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '' });
	}

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render () {
		return (
			<form style={{ display: 'flex' }} onSubmit={ this.onSubmit } >
				<input type="text" name="title" placeholder="Add Todo....." style={{ flex: '10px', padding: '8px' }} value={ this.state.title } onChange={ this.onChange } />
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default AddTodo;