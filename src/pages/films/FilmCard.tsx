import React from 'react';

import styles from './FilmCard.module.css';
import noimage from '../../img/noimage.jpg'

interface filmItem{
	Title:string,
	Year:string,
	Poster: string
	imdbID: string
};

export const FilmCard:React.FC<{item:filmItem}> = ({ item }) => {
	const { Title, Year, Poster, imdbID } = item;
	return (
		<div className={styles.container}>
			<img src={Poster==="N/A"?noimage: Poster} alt={Title} />
			<div className={styles.infoBlock}>{`${Title}(${Year})`}</div>
		</div>
	);
};
