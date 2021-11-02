import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { descriptionSagaWatcher } from './sagas/getDescriptionSaga';
import { searchSagaWatcher } from './sagas/searchSaga';
import { showMoreSagaWatcher } from './sagas/showMoreSaga';

export const saga = createSagaMiddleware();

export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(saga),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

saga.run(searchSagaWatcher);
saga.run(showMoreSagaWatcher);
saga.run(descriptionSagaWatcher);
