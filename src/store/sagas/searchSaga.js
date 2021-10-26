import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_BY_SEARCH_VALUE } from '../../constants/types';
import {
	changeErrorStatus,
	changeLoadingStatus,
	searchFilms,
} from '../actions';

async function fetchFilms(searchValue) {
	try {
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=e5e760b6&s=${searchValue}&page=1&`
		);
		return await response.json();
	} catch (e) {
		console.log(e);
	}
}

function* sagaWorker(action) {
	try {
		yield put(changeLoadingStatus(true));
		const films = yield call(fetchFilms, action.payload);
		yield put(searchFilms(films));
	} catch {
		yield put(changeErrorStatus(true));
	} finally {
		yield put(changeLoadingStatus(false));
	}
}

export function* searchSagaWatcher() {
	yield takeEvery(LOAD_BY_SEARCH_VALUE, sagaWorker);
}
