import React, { useState } from 'react';

import './App.css';
// Components
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);

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
			/>
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
