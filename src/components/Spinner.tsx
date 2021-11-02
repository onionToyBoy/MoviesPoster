import React from 'react';

import styles from './Spinner.module.css';

export const Spinner: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.spinner}>
				<div className={styles.loader}>Loading...</div>
			</div>
		</div>
	);
};
