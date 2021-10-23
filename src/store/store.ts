import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/';
import { sagaWatcher } from './sagas/';

export const saga = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(sagaWatcher);