import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './FilmCard.module.css';
import noimage from '../../img/noimage.jpg';
import { loadById, searchFilms } from '../../store/actions';

interface filmItem {
	Title: string;
	Year: string;
	Poster: string;
	imdbID: string;
}

export const FilmCard: React.FC<{ item: filmItem }> = ({ item }) => {
	const { Title, Year, Poster, imdbID } = item;

	const dispatch = useDispatch();

	const onOpenDescription: () => void = () => {
		dispatch(loadById(imdbID));
		dispatch(searchFilms({}));
	};

	return (
		<Link
			className={styles.container}
			onClick={onOpenDescription}
			to={`/description/${imdbID}`}
		>
			<img
				src={Poster === 'N/A' ? noimage : Poster}
				alt={Title}
				className={styles.image}
			/>
			<div className={styles.infoBlock}>{`${Title}(${Year})`}</div>
		</Link>
	);
};
