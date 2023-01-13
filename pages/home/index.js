import { BookDetailSection, BookSection, Container,Navbar } from '@components';
import React from 'react';

import styles from './styles.module.scss';
const HomeView = () => {
    return (
        <Container>
            <Navbar/>
            <div className={styles.view}>
                <h1 className={styles.title}>HELLO WORLD!!!</h1>
            </div>
           <BookSection/>
           <BookDetailSection/>
        </Container>

    )
}
export default HomeView;