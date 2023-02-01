import { Button, Carousel } from "@components";
import Title from "@components/Title";
import { config } from "@config";
import { Col, Row } from "react-bootstrap";
import style from './index.module.scss'
import BookCard from "@components/Cards/DetailCard/index";
import DetailCard from "@components/Cards/DetailCard/index";


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


function BookDetailSection() {
    
    const mock = ["Top selling", "Deals", "New releases in fiction", "New releases in nonfiction", "Top free"];
    const btn = mock.map((s, index) => {
        return s=="Top selling"? <Button key={index} className={`mx-3 my-2 ${style.btn} ${style.active} `} variant={"outline-dark"}>{s}</Button>:<Button key={index} className={`mx-3 my-2 ${style.btn}`} variant={"outline-dark"}>{s}</Button>
    })
    return (
        <Row>
            <Title text={"Top chart"} />
            <div>
                {btn}
            </div>
            <Carousel responsive={config.responsive.BookDetailSection}>
                {
                    data.map((b, rowIndex) => { //Row
                        if(rowIndex % 9 == 0) {
                            return (
                                <Row key={`detail-row-${rowIndex}`}>
                                    {
                                        data.map((book, index) => {
                                            if(index < (rowIndex || 9)) {
                                                return (
                                                    <Col xs={12} sm={6} md={4} key={`detail-card-col-${index}`}>
                                                        <DetailCard 
                                                            img={book.img} 
                                                            title={book.title} 
                                                            price={book.price}
                                                        />
                                                       
                                                    </Col>
                                                   
                                                )
                                            }
                                        })
                                    }
                                </Row>
                            );
                        }
                    })
                }
            </Carousel>
        </Row>
    );
}

export default BookDetailSection;