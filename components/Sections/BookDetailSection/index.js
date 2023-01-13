import { Button, Carousel } from "@components";
import Title from "@components/Title";
import { config } from "@config";
import { Col, Row } from "react-bootstrap";
import style from './index.module.scss'
import BookCard from "@components/Cards/DetailCard/index";
import DetailCard from "@components/Cards/DetailCard/index";
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

                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            {/* <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div> */}
                            <DetailCard img={'https://books.google.com/books/content/images/frontcover/r23bFouhu1MC?fife=w256-h256'} title={'title'} price={12000}></DetailCard>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card mx-3 my-3">
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Carousel>
        </Row>
    );
}

export default BookDetailSection;