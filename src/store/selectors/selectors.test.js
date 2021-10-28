import {
	selectFilms,
	selectLoadingStatus,
	selectPage,
	selectTotalResults,
	selectOpendFilmId,
	selectFilmDescription,
} from './index';

describe('Tests of selectors', () => {
	const collectionId = 635868640;

	const state = {
		favoriteAlbumsReducer: {
            films: [
                { Title: 'Pink',Year:'2005',Poster:'http//2322323dssd', imdbID: 'tt23243' },
                { Title: 'Matrix',Year:'1999',Poster:'http//7801323dssd', imdbID: 'tt20192' },
                { Title: 'Ice age',Year:'2006',Poster:'http//0032323fdfa', imdbID: 'tt55243' }
            ],
			favorites: {
        
				[collectionId]: {
					album: {
						collectionId,
						collectionName: 'The Best Hits',
						collectionPrice: 7.99,
						artworkUrl60: 'https://is5-ssl.mzstatic.com',
						artistName: 'Ёлка',
					},
					
				},
			},
		},
	};

	test('selectFavorites selector should  return favorites', () => {
		const result = selectFavorites(state);

		expect(result).toBe(state.favoriteAlbumsReducer.favorites);
	});

	test('selectFavoriteAlbums selector should return favorite album', () => {
		const result = selectFavoriteAlbums(collectionId)(state);

		expect(result).toBe(state.favoriteAlbumsReducer.favorites[collectionId]);
	});
});
