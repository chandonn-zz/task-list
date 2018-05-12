import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TaskItems extends Component {
	constructor(props) {
		super(props)

		this.createItem = this.createItem.bind(this)
	}

	delete(key) {
		this.props.delete(key);
	}

	createItem(item) {
		console.log(item);
		// arrow notation pois a função será
		// adicionada no momento da criação do item
		// por isso também não fazemos o bind de delete
		return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.items === this.props.items) {
			return false
		}
		return true
	}

	render() {
		var items = this.props.items.map(this.createItem)

		return(
			<ul className="TaskItems">
				<FlipMove duration={250} easing="ease-out">
					{items}
				</FlipMove>
			</ul>
		)
	}
}

export default TaskItems;