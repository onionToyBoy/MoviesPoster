import {  put, call, throttle } from 'redux-saga/effects';
import { LOAD_BY_SEARCH_VALUE } from '../../constants/types';
import {
	changeErrorStatus,
	changeLoadingStatus,
	searchFilms,
} from '../actions';

type actionType= {
	type: typeof LOAD_BY_SEARCH_VALUE,
	payload: string,
}

const fetchFilms = async(searchValue:string):Promise<any>=> {
	try {
		const response = await fetch(
			`http://www.omdbapi.com/?apikey=e5e760b6&s=${searchValue}&page=1&`
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
		yield put(searchFilms(films));
	} catch {
		yield put(changeErrorStatus(true));
	} finally {
		yield put(changeLoadingStatus(false));
	}
}

export function* searchSagaWatcher() {
	yield throttle(2000, LOAD_BY_SEARCH_VALUE, sagaWorker);
}
