import Image from "next/image";
import icons from 'bootstrap-icons/icons/arrow-right.svg';
import { Button, Col, Collapse, Row } from "react-bootstrap";
import { useState } from "react";
const aboutSection = ({ data }) => {
    const [open,setOpen] = useState(false);
    return (
        <>
            <Row className={`mx-2`}>
                <h4>About this book
                    <button className={`btn btn-default`}>
                        <Image src={icons} alt="" width={30} />
                    </button>
                </h4>
            </Row>
            <Row className={`mx-2`}>
                <p>{data.content}</p>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    {!open?"See More":"collapse"}
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text my-5">
                        <Row className="my-4">
                            <Col md={6}>
                                <h6>Language</h6>
                                <span>{data.language}</span>
                            </Col>
                            <Col md={6}>
                                <h6>Features</h6>
                                <span>Original pages</span>
                            </Col>
                        </Row>
                        <Row className="my-4">
                            <Col md={6}>
                                <h6>Seller</h6>
                                <span>{data.seller}</span>
                            </Col>
                            <Col md={6}>
                                <h6>Author</h6>
                                <span>{data.author.toString().replaceAll(",",", ")}</span>
                            </Col>
                        </Row>
                        <Row className="my-4">
                            <Col md={6}>
                                <h6>Publisher</h6>
                                <span>{data.publisher}</span>
                            </Col>
                            <Col md={6}>
                                <h6>Published on</h6>
                                <span>{data.time_published}</span>
                            </Col>
                        </Row>
                        <Row className="my-4">
                            <Col md={6}>
                                <h6>ISBN</h6>
                                <span>{data.isbn}</span>
                            </Col>
                            <Col md={6}>
                                <h6>Best for</h6>
                                <span>{data.best_for}</span>
                            </Col>
                        </Row>
                        <Row className="my-4">
                            <Col md={6}>
                                <h6>Pages</h6>
                                <span>{data.pages}</span>
                            </Col>
                            <Col md={6}>
                                <h6>Content protection</h6>
                                <span>This content is DRM protected</span>
                            </Col>
                        </Row>
                        <Row className="my-4">
                            <Col md={6}>
                                <h6>Genres</h6>
                                <span>{data.genres.toString().replaceAll(","," / ")}</span>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
                <Row className="my-3">
                    <span>tags:
                        {
                            data.tags.map(s=>{
                                return <button key={s.id} className="btn btn-defaut border mx-2">{s.name}</button>
                            })
                        }
                    </span>
                </Row>
            </Row>
        </>
    )
}
export default aboutSection;