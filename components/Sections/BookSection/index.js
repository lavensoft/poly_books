import { Carousel } from "@components";
import Title from "@components/Title";
import { config } from "@config";
import { Row } from "react-bootstrap";
import BookCard from "@components/Cards/BookCard";


function BookSection() {
    return (
        <Row>
            <Title text={"Top selling comics"} />
            <Carousel responsive={config.responsive.BookSection}>
                <div className="card mx-3" >
                    <BookCard img={'https://books.google.com/books/content/images/frontcover/r23bFouhu1MC?fife=w256-h256'} title={'title'} price={12000}></BookCard>
                </div>
                <div className="card mx-3" style={{ height: "300px" }}>
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
                <div className="card mx-3" style={{ height: "300px" }}>
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
                <div className="card mx-3" style={{ height: "300px" }}>
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
                <div className="card mx-3" style={{ height: "300px" }}>
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
                <div className="card mx-3" style={{ height: "300px" }}>
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
                <div className="card mx-3" style={{ height: "300px" }}>
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>

            </Carousel>
        </Row>
    );
}

export default BookSection;