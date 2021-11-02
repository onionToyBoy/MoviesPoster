import React from 'react';

import styles from './EmptyList.module.css';
import hand from '../../img/hand.png';

export const EmptyList: React.FC<{ isSearched: boolean }> = ({
	isSearched,
}) => {
	return (
		<div className={styles.container}>
			{isSearched || (
				<img src={hand} className={styles.image} alt='Find movie' />
			)}

			<div className={styles.title}>
				{isSearched ? 'No results:(' : 'Find a film'}
			</div>
		</div>
	);
};
