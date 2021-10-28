import {
	selectFilms,
	selectLoadingStatus,
	selectPage,
	selectTotalResults,
	selectOpendFilmId,
	selectFilmDescription,
} from './index';

describe('Tests of selectors', () => {
	const opendFilmId = 'tt1520211';

	const state = {
		films: [
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
			{
				Title: 'Ice age',
				Year: '2006',
				Poster: 'http//0032323fdfa',
				imdbID: 'tt55243',
			},
		],
		opendFilms: {
			[opendFilmId]: {
				Actors: 'Andrew Lincoln, Norman Reedus, Melissa McBride',

				Genre: 'Drama, Horror, Thriller',
				Plot: 'Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.',
				Poster:
					'https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
				Runtime: '44 min',
				Title: 'The Walking Dead',
				Country: 'United States',
				Type: 'series',
				Year: '2010–2022',
				imdbID: 'tt1520211',
				imdbRating: '8.2',
				imdbVotes: '903,495',
				totalSeasons: '11',
			},
		},
		isLoading: false,
		isError: false,
		opendFilmId: opendFilmId,
		page: 1,
		totalResults: 65,
	};

	test('selectFilms selector should  return films', () => {
		const result = selectFilms(state);

		expect(result).toBe(state.films);
	});

	test('selectFilmDescription selector should return opend film', () => {
		const result = selectFilmDescription(opendFilmId)(state);

		expect(result).toBe(state.opendFilms[opendFilmId]);
	});

	test('selectLoadingStatus selector should  return isLoading', () => {
		const result = selectLoadingStatus(state);

		expect(result).toBe(state.isLoading);
	});

	test('selectPage selector should  return page', () => {
		const result = selectPage(state);

		expect(result).toBe(state.page);
	});

	test('selectTotalResults selector should  return totalResults', () => {
		const result = selectTotalResults(state);

		expect(result).toBe(state.totalResults);
	});

	test('selectOpendFilmId selector should  return opendFilmId', () => {
		const result = selectOpendFilmId(state);

		expect(result).toBe(state.opendFilmId);
	});
});
