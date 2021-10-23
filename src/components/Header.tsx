import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Header.module.css';
import {store} from '../store/store'


export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.widthLimiter}>
                <div className={styles.logo} onClick={()=>console.log(store.getState())}>ZombieFilms</div>
                <div className={styles.buttons}>
                    <Link to='/' className={styles.button}>Home</Link>
                    <Link to='/about' className={styles.button}>About</Link>
                </div>
            </div>
        </div>
    );
}
