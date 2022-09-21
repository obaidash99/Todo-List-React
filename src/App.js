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

	// Run once when the app starts
	useEffect(() => {
		getLocalTodos();
	}, []);

	// UseEffect
	useEffect(() => {
		filterHndler();
		saveLocalTodos();
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

	// Sae=ve to local
	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem('todos'));
			setTodos(todoLocal);
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
			/>
			<TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
		</div>
	);
};

export default App;
