import React, { useEffect } from 'react';

import styles from './FilmDescription.module.css';
import noimage from '../../img/noimage.jpg';
import { useSelector } from 'react-redux';
import {
	selectFilmDescription,
	selectOpendFilmId,
	selectLoadingStatus,
} from '../../store/selectors';

export const FilmDescription = () => {
	const id = useSelector(selectOpendFilmId);
	const film = useSelector(selectFilmDescription(id));
	const loadingStatus = useSelector(selectLoadingStatus);

	return (
		<div>
			{loadingStatus || (
				<div className={styles.container}>
					<img
						src={film.Poster === 'N/A' ? noimage : film.Poster}
						alt={film.Title}
					/>
					<div
						className={styles.infoBlock}
					>{`${film.Title}(${film.Year})`}</div>
				</div>
			)}
		</div>
	);
};
