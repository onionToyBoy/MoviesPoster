import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import { Films } from './pages/films/Films';
import { About } from './pages/about/About';
import { useSelector } from 'react-redux';
import { selectLoadingStatus } from './store/selectors';
import { Spinner } from './components/Spinner';
import { FilmDescription } from './pages/description/FilmDescription';


function App() {
	const loadingStatus = useSelector(selectLoadingStatus);

	return (
			<Router>
				<Header />
				<div className='container'>
					<div className='content'>
						<Route path='/' exact component={Films} />
						<Route path='/about' component={About} />
						<Route path='/description' component={FilmDescription} />
					</div>
				</div>
				{loadingStatus&&<Spinner/>}
			</Router>
	);
}

export default App;
