import {
	CHANGE_ERROR_STATUS,
	CHANGE_LOADING_STATUS,
	SEARCH_FILMS,
	SET_FILM_DESCRIPTION,
	LOAD_MORE_FILMS,
	INCREMENT_PAGE,
	SET_NUMBER_OF_RESULTS,
} from '../../constants/types';

const initialState = {
	films: [] as Array<Object>,
	isLoading: false as boolean,
	isError: false as boolean,
	opendFilms: {} as object,
	page: 1 as number,
	totalResults: 0 as number,
};

export type initialState = typeof initialState;

export const rootReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SEARCH_FILMS:
			const updatedFilms = Object.keys(action.payload).includes('Search')
				? action.payload.Search
				: [];
			const upDatedTotalResults = Object.keys(action.payload).includes(
				'totalResults'
			)
				? +action.payload.totalResults
				: 0;
			return {
				...state,
				films: updatedFilms,
				totalResults: upDatedTotalResults,
			};
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
		case LOAD_MORE_FILMS:
			const extendedFilms = state.films?.concat(
				Object.keys(action.payload).includes('Search')
					? action.payload.Search
					: []
			);
			return { ...state, films: extendedFilms };
		case INCREMENT_PAGE:
			const nextPage = state.page + 1;
			return { ...state, page: nextPage };
		default:
			return state;
	}
};
