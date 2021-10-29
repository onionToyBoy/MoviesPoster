import { initialStateType } from '../reducers';

export const selectFilms = (state: initialStateType) => state.films;

export const selectLoadingStatus = (state: initialStateType) => state.isLoading;

export const selectPage = (state: initialStateType) => state.page;

export const selectTotalResults = (state: initialStateType) => state.totalResults;

export const selectOpendFilmId = (state: initialStateType) => state.opendFilmId;

export const selectFilmDescription = (id: string) => (state: initialStateType) =>
	state.opendFilms[id];
