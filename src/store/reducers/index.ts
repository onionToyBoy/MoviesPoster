import {
	CHANGE_ERROR_STATUS,
	CHANGE_LOADING_STATUS,
	SEARCH_FILMS,
	SET_FILM_DESCRIPTION,
	LOAD_MORE_FILMS,
	INCREMENT_PAGE,
} from '../../constants/types';

type opendFilsType = {
	[key: string]: any;
};

 export const initialState = {
	films: [] as Array<Object>,
	isLoading: false as boolean,
	isError: false as boolean,
	opendFilms: {} as opendFilsType,
	opendFilmId: '' as string,
	page: 1 as number,
	totalResults: 0 as number,
};

export type initialStateType = typeof initialState;

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
				page: 1,
			};
		case CHANGE_LOADING_STATUS:
			return { ...state, isLoading: action.payload };
		case CHANGE_ERROR_STATUS:
			return { ...state, isError: action.payload };
		case SET_FILM_DESCRIPTION:
			const updatedOpendFilms: Object = {
				...state.opendFilms,
				[action.payload.imdbID]: action.payload,
			};
			return {
				...state,
				opendFilms: updatedOpendFilms,
				opendFilmId: action.payload.imdbID,
			};
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
