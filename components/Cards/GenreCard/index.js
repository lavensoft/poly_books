import React from 'react';
import styles from "./styles.module.scss";

export const GenreCard = () => {
    return (
        <div className={styles.genreCard}>
            <div className={styles.imageContainer}>
                <img className={styles.image}/>
            </div> 
            <div className={styles.information}>
                <h5 className={styles.title}>iPhone</h5>
                <span className={styles.subTitle}>Collection mua xuan 2023</span>
                <a className={styles.actionTitle}>XEM THEM</a>
            </div>
        </div>
    )
}