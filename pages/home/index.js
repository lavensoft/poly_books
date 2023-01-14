import { BookDetailSection, BookSection } from '@components';
import React from 'react';

import styles from './styles.module.scss';
const HomeView = () => {
    return (
        <>
            <div className={styles.view}>
                <h1 className={styles.title}>HELLO WORLD!!!</h1>
            </div>
           <BookSection/>
           <BookDetailSection/>
        </>

    )
}
export default HomeView;