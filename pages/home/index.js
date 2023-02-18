import { BookDetailSection, Carousel, BookSubSection, GenreCard, BookSection, Container, Section, BookCard, View, LandingCarousel } from '@components';
import React from 'react';
import {DATA} from '../../mock/index';
import styles from './styles.module.scss';
import DetailInfo from '@components/DetailInfo/index';
import Prop from '@components/Popup/index';
import { Col, Row } from 'react-bootstrap';
import { config } from "@config";

const data = [
    {
        img: 'https://books.google.com/books/content/images/frontcover/9N233mxleh8C?fife=w480-h690',
        title: "Book 1",
        price: 120000
    },
    {
        img: 'https://books.google.com/books/content/images/frontcover/9N233mxleh8C?fife=w480-h690',
        title: "Book 1",
        price: 120000
    },
    {
        img: 'https://books.google.com/books/content/images/frontcover/9N233mxleh8C?fife=w480-h690',
        title: "Book 1",
        price: 120000
    },
    {
        img: 'https://books.google.com/books/content/images/frontcover/9N233mxleh8C?fife=w480-h690',
        title: "Book 1",
        price: 120000
    },
    {
        img: 'https://books.google.com/books/content/images/frontcover/9N233mxleh8C?fife=w480-h690',
        title: "Book 1",
        price: 120000
    },
    {
        img: 'https://books.google.com/books/content/images/frontcover/9N233mxleh8C?fife=w480-h690',
        title: "Book 1",
        price: 120000
    }
]

const HomeView = () => {
    return (
        <View>
            <LandingCarousel/>

            <Section
                title="Spring 2023"
                subTitle="Spring 2023"
            >
                <Row>
                    <Col>
                        <GenreCard/>
                    </Col>
                    <Col>
                        <GenreCard/>
                    </Col>
                    <Col>
                        <GenreCard/>
                    </Col>
                </Row>
            </Section>

            <Section dark>
                <BookSubSection/>
            </Section>

            <Section title="Sách Bán Chạy" subTitle="Các sách bán chạy đầu mùa xuân 2023">
                <Carousel responsive={config.responsive.BookSection}>
                    <Row>
                    {
                        data.map((book, index) => {
                            return (
                                <Col md={4} key={`book-card-col-1-${index}`}>
                                    <BookCard img={book.img} title={book.title} price={book.price}/>
                                </Col>
                            )
                        })
                    }
                    </Row>
                    <Row style={{marginTop: 15}}>
                    {
                        data.map((book, index) => {
                            return (
                                <Col md={4} key={`book-card-col-${index}`}>
                                    <BookCard img={book.img} title={book.title} price={book.price}/>
                                </Col>
                            )
                        })
                    }
                    </Row>
                </Carousel>
            </Section>
            <BookDetailSection/>
        </View>

    )
}
export default HomeView;