import React, { Component } from 'react';
import TaskItems from './TaskItems';
import './TaskList.css';

class TaskList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			currentTask: '',
			items: []
		}

		this.addTask	= this.addTask.bind(this);
		this.updateText = this.updateText.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	updateText(e) {
		this.setState({
			currentTask: e.target.value
		});
	}

	addTask(event) {
		event.preventDefault()
		if (this.state.currentTask === '') {
			return
		}

		// A task vem do input através do state currentText
		// por ser um vetor, precisa de uma key, que vai ser da data atual
		var newTask = this.state.items.concat({
			text: this.state.currentTask,
			key: Date.now()
		})

		console.log(newTask)
		this.setState({
			items: newTask,
			currentTask: ''
		})
	}

	deleteItem(key) {
		var newItems = this.state.items.filter(item => {
			return (item.key !== key)
		})

		this.setState({
			items: newItems
		})
	}

	render() {
		return(
			<div className="TaskList">
				<div className="header">
					<span>Task List App</span>
					<form onSubmit={this.addTask}>
						<input onChange={this.updateText} type="text" placeholder="Nova tarefa" value={this.state.currentTask}>
						</input>
						<button type="submit">Adicionar</button>
					</form>
				</div>
				<TaskItems delete={this.deleteItem} items={this.state.items}/>
			</div>
		)
	}
}

export default TaskList