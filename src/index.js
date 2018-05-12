import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import './index.css';

var main = document.querySelector('#container');

ReactDOM.render(
	<div>
		<TaskList/>
	</div>,
	main
)