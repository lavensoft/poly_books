import { BookDetailSection, BookSection, Container,Navbar, BookCard } from '@components';
import React from 'react';
import {DATA} from '../../mock/index';
import styles from './styles.module.scss';
import DetailInfo from '@components/DetailInfo/index';
import Prop from '@components/Popup/index';

const data = [
    {
        img: 'https://books.google.com/books/content/images/frontcover/r23bFouhu1MC?fife=w256-h256',
        title: "Book 1",
        price: 120000
    },
    {
        img: 'https://books.google.com/books/content/images/frontcover/r23bFouhu1MC?fife=w256-h256',
        title: "Book 1",
        price: 120000
    },
    {
        img: 'https://books.google.com/books/content/images/frontcover/r23bFouhu1MC?fife=w256-h256',
        title: "Book 1",
        price: 120000
    },
    {
        img: 'https://books.google.com/books/content/images/frontcover/r23bFouhu1MC?fife=w256-h256',
        title: "Book 1",
        price: 120000
    },
    {
        img: 'https://books.google.com/books/content/images/frontcover/r23bFouhu1MC?fife=w256-h256',
        title: "Book 1",
        price: 120000
    },
    {
        img: 'https://books.google.com/books/content/images/frontcover/r23bFouhu1MC?fife=w256-h256',
        title: "Book 1",
        price: 120000
    }
]

const HomeView = () => {
    return (
        <Container>
            <Navbar/>
            <DetailInfo 
                rating='5'
                viewCount='125'
                category='hentai'
                pages='180'
            ></DetailInfo>

            <Prop></Prop>
        <>
            {/* <Navbar/> */}
            <div className={styles.view}>
                <h1 className={styles.title}>HELLO WORLD!!!</h1>
            </div>
            <BookSection>
                {
                    data.map((book, index) => {
                        return <BookCard key={`book-card-1-${index}`} img={book.img} title={book.title} price={book.price}/>
                    })
                }
            </BookSection>
            <Container>
                <div className={styles.view}>
                    <h1 className={styles.title}>HELLO WORLD!!!</h1>
                </div>
            </Container>
            <BookSection>
                {
                    data.map((book, index) => {
                        return <BookCard key={`book-card-1-${index}`} img={book.img} title={book.title} price={book.price}/>
                    })
                }
            </BookSection>
            <BookDetailSection/>
        </>

    )
}
export default HomeView;