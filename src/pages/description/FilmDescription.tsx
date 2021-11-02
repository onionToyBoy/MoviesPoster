import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FilmDescription.module.css';
import noimage from '../../img/noimage.jpg';
import { useSelector } from 'react-redux';
import {
	selectFilmDescription,
	selectOpendFilmId,
	selectLoadingStatus,
} from '../../store/selectors';
import { HOME } from '../../constants/paths';

export const FilmDescription: React.FC = () => {
	const id = useSelector(selectOpendFilmId);
	const film = useSelector(selectFilmDescription(id));
	const loadingStatus = useSelector(selectLoadingStatus);

	const choiseColor: (raiting: string | undefined) => any = (raiting) => {
		if (raiting) {
			if (raiting === 'N/A') {
				return styles.hidden;
			}
			const numberRaiting: number = parseFloat(raiting);

			if (numberRaiting < 4) {
				return styles.red;
			}
			if (numberRaiting < 5) {
				return styles.orange;
			}
			if (numberRaiting < 6) {
				return styles.yellow;
			}
			if (numberRaiting < 8) {
				return styles.lightGreen;
			}
			if (numberRaiting >= 8) {
				return styles.strongGreen;
			}
		}
	};

	return (
		<div className={styles.container}>
			{loadingStatus || (
				<div className={styles.description}>
					<div className={styles.imageContainer}>
						<Link to={HOME} className={styles.buttonContainer}>
							<div className={styles.button}>Back</div>
						</Link>
						<img
							src={film.Poster === 'N/A' ? noimage : film.Poster}
							alt={film.Title}
							className={styles.image}
						/>
					</div>
					<div className={styles.container}>
						<div className={styles.title}>{film.Title}</div>
						<div className={styles.infoBlock}>
							<img
								src={film.Poster === 'N/A' ? noimage : film.Poster}
								alt={film.Title}
								className={styles.innerImage}
							/>
							<div className={styles.info}>
								<div className={styles.label}>Year:</div>
								<div>{film.Year}</div>
							</div>
							<div className={styles.info}>
								<div className={styles.label}>Type:</div>
								<div>{film.Type}</div>
							</div>
							<div className={styles.info}>
								<div className={styles.label}>Actors:</div>
								<div>{film.Actors}</div>
							</div>
							<div className={styles.info}>
								<div className={styles.label}>Country:</div>
								<div>{film.Country}</div>
							</div>
							<div className={styles.info}>
								<div className={styles.label}>Genre:</div>
								<div>{film.Genre}</div>
							</div>
							<div className={styles.info}>
								<div className={styles.label}>Runtime:</div>
								<div>{film.Runtime}</div>
							</div>
							<div className={styles.info}>
								<div className={styles.label}>Plot:</div>
								<div>{film.Plot}</div>
							</div>
							<div
								className={`${styles.rating} ${choiseColor(film.imdbRating)}`}
							>
								★{film.imdbRating}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
