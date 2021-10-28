import React from 'react';

import styles from './RadioButton.module.css';

export const RadioButton: React.FC<{ label: string, isSelected:boolean, fn:()=>void }> = ({label,isSelected, fn}) => {
	const checkStatus = () => {
		return isSelected
			? `${styles.checkBox} ${styles.selected}`
			: styles.checkBox;
	};

	return (
		<div className={styles.container}>
			<div className={checkStatus()} onClick={fn}></div>
			<div className={styles.label}>{label}</div>
		</div>
	);
};