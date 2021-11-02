import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import { Films } from './pages/films/Films';
import { About } from './pages/about/About';
import { useSelector } from 'react-redux';
import { selectLoadingStatus } from './store/selectors';
import { Spinner } from './components/Spinner';
import { FilmDescription } from './pages/description/FilmDescription';
import { ABOUT, DESCRIPTION, HOME } from './constants/paths';

function App() {
	const loadingStatus = useSelector(selectLoadingStatus);

	return (
		<Router>
			<Redirect from='/' to={HOME} />
			<Header />
			<div className='container'>
				<div className='content'>
					<Route path={HOME} exact component={Films} />
					<Route path={ABOUT} component={About} />
					<Route path={DESCRIPTION} component={FilmDescription} />
				</div>
			</div>
			{loadingStatus && <Spinner />}
		</Router>
	);
}

export default App;
