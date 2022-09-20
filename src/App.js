import React, { useState } from 'react';

import './App.css';
// Components
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
	const [inputText, setInputText] = useState('');

	return (
		<div className="app">
			<header>
				<h1>Ed's Todo List</h1>
			</header>
			<Form setInputText={setInputText} />
			<TodoList />
		</div>
	);
};

export default App;
