import React from 'react';

import styles from './FilmCard.module.css';

interface filmItem{
	Title:string,
	Year:string,
	Poster: string
};

export const FilmCard:React.FC<{item:filmItem}> = ({ item }) => {
	const { Title, Year, Poster } = item;
	return (
		<div className={styles.container}>
			<img src={Poster} alt={Title} />
			<div className={styles.infoBlock}>{`${Title}(${Year})`}</div>
		</div>
	);
};
