import { Carousel } from "@components";
import Title from "@components/Title";
import { config } from "@config";
import { Row } from "react-bootstrap";

function BookSection() {
    return (
        <Row>
            <Title text={"Top selling comics"} />
            <Carousel responsive={config.responsive.BookSection}>
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