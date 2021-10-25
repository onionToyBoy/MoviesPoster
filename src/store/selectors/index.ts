import { initialState } from '../reducers';

export const selectFilms = (state: initialState) => state.films;

export const selectLoadingStatus = (state: initialState) => state.isLoading;

export const selectPage = (state: initialState) => state.page;

export const selectTotalResults = (state: initialState) => state.totalResults;

export const selectOpendFilmId= (state: initialState) =>
	state.opendFilmId;

export const selectFilmDescription= (id:string) => (state: initialState) =>
	state.opendFilms[id];
  