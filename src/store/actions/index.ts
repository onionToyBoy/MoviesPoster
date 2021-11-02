import {
	CHANGE_ERROR_STATUS,
	CHANGE_LOADING_STATUS,
	SEARCH_FILMS,
	SET_FILM_DESCRIPTION,
	LOAD_BY_SEARCH_VALUE,
	SHOW_MORE_FILMS,
	LOAD_MORE_FILMS,
	INCREMENT_PAGE,
	LOAD_BY_ID,
} from '../../constants/types';

export const changeErrorStatus = (status: boolean) => {
	return {
		type: CHANGE_ERROR_STATUS,
		payload: status,
	};
};

export const changeLoadingStatus = (status: boolean) => {
	return {
		type: CHANGE_LOADING_STATUS,
		payload: status,
	};
};

export const loadBySearchValue = (searchValue: string = '') => {
	return {
		type: LOAD_BY_SEARCH_VALUE,
		payload: searchValue,
	};
};

export const loadById = (id: string) => {
	return {
		type: LOAD_BY_ID,
		payload: id,
	};
};

export const setFilmDescription = (film: Object) => {
	return {
		type: SET_FILM_DESCRIPTION,
		payload: film,
	};
};

export const searchFilms = (films: any) => {
	return {
		type: SEARCH_FILMS,
		payload: films,
	};
};

export const showMoreFilms = (searchValue: string = '', page: number) => {
	return {
		type: SHOW_MORE_FILMS,
		payload: {
			page,
			searchValue,
		},
	};
};

export const loadMoreFilms = (films: any) => {
	return {
		type: LOAD_MORE_FILMS,
		payload: films,
	};
};

export const incrementPage = () => {
	return {
		type: INCREMENT_PAGE,
	};
};
