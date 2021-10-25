import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/';
import { searchSagaWatcher } from './sagas/searchSaga';
import { showMoreSagaWatcher } from './sagas/showMoreSaga';

export const saga = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(searchSagaWatcher);
saga.run(showMoreSagaWatcher);