import {
	CHANGE_ERROR_STATUS,
	CHANGE_LOADING_STATUS,
	SEARCH_FILMS,
	SET_FILM_DESCRIPTION,
} from '../../constants/types';

const initialState = {
	films: [] as Array<Object> | null,
	isLoading: false as boolean,
	isError: false as boolean,
	opendFilms: {} as object | null,
};

export type initialState = typeof initialState;

export const rootReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SEARCH_FILMS:
			const updatedFilms = Object.keys(action.payload).includes('Search')? action.payload.Search: [];
			return { ...state, films: updatedFilms };
		case CHANGE_LOADING_STATUS:
			return { ...state, isLoading: action.payload };
		case CHANGE_ERROR_STATUS:
			return { ...state, isError: action.payload };
		case SET_FILM_DESCRIPTION:
			const updatedOpendFilms: Object = {
				...state.opendFilms,
				[action.payload.film.imdbID]: action.payload.film,
			};
			return { ...state, opendFilms: updatedOpendFilms };
		default:
			return state;
	}
};
