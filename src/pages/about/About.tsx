import React from 'react';

import styles from './About.module.css';
import zombie from '../../img/zombie1.png'

export const About = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>About us</h3>
            <div className={styles.content}>
                <div className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, ducimus impedit. Velit aut veritatis aspernatur nobis enim a sunt at, officiis quas, veniam unde est ut dolores architecto exercitationem? Libero.
                </div>
                <div className={styles.imageBlock}>
                    <img src={zombie} className={styles.image} alt='Zombie' />
                </div>
                <div className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, ducimus impedit. Velit aut veritatis aspernatur nobis enim a sunt at, officiis quas, veniam unde est ut dolores architecto exercitationem? Libero.
                </div>

            </div>
            <div className={styles.contactsBlock}>
                <div>
                    <label className={styles.label}>Phone number:</label>
                    <a href="tel:123-456-7890" className={styles.phone}>123-456-7890</a>
                </div>
                <div>
                    <label className={styles.label}>Email:</label>
                    <a href="webmonsters@gmail.com" target="_blank">webmonsters@gmail.com</a>
                </div>
            </div>
        </div>
    )
}