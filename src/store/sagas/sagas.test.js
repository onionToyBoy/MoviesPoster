import {
	descriptionSagaWatcher,
	sagaWorker as descriptionSagaWorker,
} from './getDescriptionSaga';
import {
	searchSagaWatcher,
	sagaWorker as searchSagaWorker,
} from './searchSaga';
import {
	showMoreSagaWatcher,
	sagaWorker as showSagaWorker,
} from './showMoreSaga';
import { takeEvery, throttle } from 'redux-saga/effects';
import {
	LOAD_BY_ID,
	SHOW_MORE_FILMS,
	LOAD_BY_SEARCH_VALUE,
} from '../../constants/types';

describe('Sagas tests', () => {
	test('getDescriptionSaga should be correct', async () => {
		const gen = descriptionSagaWatcher();

		const expected = takeEvery(LOAD_BY_ID, descriptionSagaWorker);
		const actual = gen.next().value;

		expect(actual).toStrictEqual(expected);
	});

	test('searchSaga should be correct', async () => {
		const gen = searchSagaWatcher();

		const expected = throttle(2000, LOAD_BY_SEARCH_VALUE, searchSagaWorker);
		const actual = gen.next().value;

		expect(actual).toStrictEqual(expected);
	});

	test('showMoreSaga should be correct', async () => {
		const gen = showMoreSagaWatcher();

		const expected = takeEvery(SHOW_MORE_FILMS, showSagaWorker);
		const actual = gen.next().value;

		expect(actual).toStrictEqual(expected);
	});
});
