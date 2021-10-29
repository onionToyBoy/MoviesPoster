import { rootReducer, initialState } from './index';
import {
	searchFilms,
	changeLoadingStatus,
	changeErrorStatus,
	setFilmDescription,
	loadMoreFilms,
	incrementPage,
} from '../actions';

describe('Root reducer', () => {
	const films = {
		Search: [
			{
				Title: 'Pink',
				Year: '2005',
				Poster: 'http//2322323dssd',
				imdbID: 'tt23243',
			},
			{
				Title: 'Matrix',
				Year: '1999',
				Poster: 'http//7801323dssd',
				imdbID: 'tt20192',
			},
		],
	};

	test('rootReducer should put safety data in newState (films)', () => {
		const newState = rootReducer(initialState, searchFilms(films));

		expect(newState.films).toBe(films.Search);
	});

	test('rootReducer should put correct data in newState (isLoading)', () => {
		const isLoading = false;

		const newState = rootReducer(initialState, changeLoadingStatus(false));

		expect(newState.isLoading).toBe(isLoading);
	});

	test('rootReducer should put correct data in newState (isError)', () => {
		const isError = false;

		const newState = rootReducer(initialState, changeErrorStatus(false));

		expect(newState.isError).toBe(isError);
	});

	test('rootReducer should put correct data in newState (page)', () => {
		const newState = rootReducer(initialState, incrementPage());

		expect(newState.page).toBe(initialState.page + 1);
	});

	test('rootReducer should put correct data in newState (opendFilms & opendFilmId)', () => {
		const defaultState = {
			...initialState,
			opendFilms: {
				tt23243: {
					Title: 'Pink',
					Year: '2005',
					Poster: 'http//2322323dssd',
					imdbID: 'tt23243',
				},
			},
		};

		const newOpendFilm = {
			Title: 'Matrix',
			Year: '1999',
			Poster: 'http//7801323dssd',
			imdbID: 'tt20192',
		};

		const expectedState = {
			...defaultState,
			opendFilms: {
				...defaultState.opendFilms,
				[newOpendFilm.imdbID]: newOpendFilm,
			},
			opendFilmId: newOpendFilm.imdbID,
		};

		const newState = rootReducer(
			defaultState,
			setFilmDescription(newOpendFilm)
		);

		expect(newState).toStrictEqual(expectedState);
	});

	test('rootReducer should put correct data in newState (upload new data in films)', () => {
		const defaultState = {
			...initialState,
			films: [
				{
					Title: 'Pink',
					Year: '2005',
					Poster: 'http//2322323dssd',
					imdbID: 'tt23243',
				},
			],
		};

		const newUploadedFilm ={ 
			Search:[
			{Title: 'Matrix',
			Year: '1999',
			Poster: 'http//7801323dssd',
			imdbID: 'tt20192',}
		]};

		const expectedState = {
			...defaultState,
			films: [
				...defaultState.films, ...newUploadedFilm.Search],
			};
	
		const newState = rootReducer(defaultState, loadMoreFilms(newUploadedFilm));

		expect(newState).toStrictEqual(expectedState);
	});

	test('Default section should return initial state', () => {
		const newState = rootReducer(initialState, {});

		expect(newState).toBe(initialState);
	});
});
