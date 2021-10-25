import { takeEvery, put, call } from 'redux-saga/effects';
import {SHOW_MORE_FILMS, SEARCH_FILMS } from '../../constants/types';
import {
	changeErrorStatus,
	changeLoadingStatus,
	searchFilms,
	setFilmDescription,
	loadData,
    loadMoreFilms,
} from '../actions';

async function fetchFilms({searchValue, page}) {
	try {
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=e5e760b6&s=${searchValue}&page=${page}`
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
		yield put(loadMoreFilms(films));
	} catch {
		yield put(changeErrorStatus(true));
	} finally {
		yield put(changeLoadingStatus(false));
	}
}

export function* showMoreSagaWatcher() {
	yield takeEvery(SHOW_MORE_FILMS, sagaWorker);
}
