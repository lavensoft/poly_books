import { BookDetailSection, BookSection } from '@components';
import React from 'react';
import {DATA} from '../../mock/index';
import styles from './styles.module.scss';
const HomeView = () => {
    return (
        <>
            <div className={styles.view}>
                <h1 className={styles.title}>HELLO WORLD!!!</h1>
            </div>
           <BookSection data={DATA.books}/>
           <BookDetailSection/>
        </>

    )
}
export default HomeView;