import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.widthLimiter}>
				<div className={styles.logo}>ZombieFilms</div>
				<div className={styles.buttons}>
					<Link to='/home' className={styles.button}>
						Home
					</Link>
					<Link to='/about' className={styles.button}>
						About
					</Link>
				</div>
			</div>
		</div>
	);
};
