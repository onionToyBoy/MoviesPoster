import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT, HOME } from '../constants/paths';

import styles from './Header.module.css';

export const Header: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.widthLimiter}>
				<div className={styles.logo}>ZombieFilms</div>
				<div className={styles.buttons}>
					<Link to={HOME} className={styles.button}>
						Home
					</Link>
					<Link to={ABOUT} className={styles.button}>
						About
					</Link>
				</div>
			</div>
		</div>
	);
};
