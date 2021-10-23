import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { store } from './store/store';
import './App.css';
import { Header } from './components/Header';
import { Films } from './pages/films/Films';


function App() {
	return (
		<Provider store={store}>
			<Router>
				<Header />
				<div className='container'>
					<div className='content'>
						<Route path='/' exact component={Films} />
					</div>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
