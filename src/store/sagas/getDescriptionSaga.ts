import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_BY_ID } from '../../constants/types';
import {
	changeErrorStatus,
	changeLoadingStatus,
	setFilmDescription,
} from '../actions';

type actionType = {
	type: typeof LOAD_BY_ID;
	payload: string;
};

const fetchFilms = async (id: string): Promise<any> => {
	try {
		const response = await fetch(
			`https://www.omdbapi.com/?apikey=e5e760b6&i=${id}`
		);
		return await response.json();
	} catch (e) {
		console.log(e);
	}
};

export function* sagaWorker(action: actionType) {
	try {
		yield put(changeLoadingStatus(true));
		const film: Object = yield call(fetchFilms, action.payload);
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
