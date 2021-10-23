import React from 'react';

import styles from './FilmCard.module.css';

export const FilmCard = ({ item }) => {
	const { Title, Year, Poster } = item;
	return (
		<div className={styles.container}>
			<img src={Poster} alt={Title} />
			<div className={styles.infoBlock}>{`${Title}(${Year})`}</div>
		</div>
	);
};
