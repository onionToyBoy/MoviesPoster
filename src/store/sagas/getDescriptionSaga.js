import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_BY_ID } from '../../constants/types';
import {
	changeErrorStatus,
	changeLoadingStatus,
	setFilmDescription,
} from '../actions';

async function fetchFilms(id) {
	try {
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=e5e760b6&i=${id}`
		);
		return await response.json();
	} catch (e) {
		console.log(e);
	}
}

function* sagaWorker(action) {
	try {
		yield put(changeLoadingStatus(true));
		const film = yield call(fetchFilms, action.payload);
		yield put(setFilmDescription(film));
	} catch {
		yield put(changeErrorStatus(true));
	} finally {
		yield put(changeLoadingStatus(false));
	}
}

export function* descriptionSagaWatcher() {
	yield takeEvery(LOAD_BY_ID, sagaWorker);
}
