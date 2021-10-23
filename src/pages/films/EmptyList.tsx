import React from 'react';

import styles from './EmptyList.module.css';
import hand from '../../img/hand.png'

export const EmptyList = () => {
    return (
        <div className={styles.container}>
            <img src={hand} className={styles.image} alt='Find movie' />
            <div className={styles.title} > Find a films</div>
        </div >
    );
};
