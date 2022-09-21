import React, { useState, useEffect } from 'react';

import './App.css';
// Components
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
	// state stuff
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	// UseEffect
	useEffect(() => {
		filterHndler();
	}, [todos, status]);

	// Function stuff
	const filterHndler = () => {
		// eslint-disable-next-line default-case
		switch (status) {
			case 'completed':
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case 'uncompleted':
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	return (
		<div className="app">
			<header>
				<h1>Ed's Todo List</h1>
			</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setStatus={setStatus}
				filteredTodos={filteredTodos}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
