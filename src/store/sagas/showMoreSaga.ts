import { takeEvery, put, call } from 'redux-saga/effects';
import {SHOW_MORE_FILMS } from '../../constants/types';
import {
	changeErrorStatus,
	changeLoadingStatus,
    loadMoreFilms,
} from '../actions';

type actionType= {
	type: typeof SHOW_MORE_FILMS,
	payload:payloadType
}

type payloadType={
	page: number
	searchValue: string,
}

const fetchFilms = async(action: payloadType ):Promise<any>=> {
	try {
		const response = await fetch(
			`https://www.omdbapi.com/?apikey=e5e760b6&s=${action.searchValue}&page=${action.page}`
		);
		return await response.json();
	} catch (e) {
		console.log(e);
	}
}

export function* sagaWorker(action: actionType) {
	try {
		yield put(changeLoadingStatus(true));
		const films:Object = yield call(fetchFilms, action.payload);
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
