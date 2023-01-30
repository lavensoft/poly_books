import { Carousel } from "@components";
import Title from "@components/Title";
import { config } from "@config";
import Link from "next/link";
import { Row } from "react-bootstrap";

function BookSection({ data }) {

    return (
        <Row>
            <Title className={"my-5"} text={"Top selling comics"} />
            <Carousel responsive={config.responsive.BookSection}>
                {
                    data.map((s) => {
                        return <div className="card mx-3" key={s.id} style={{ height: "300px" }}>
                            <div className="card-body">
                                <Link href={{
                                    pathname: "/books/details/[id]",
                                    query:{id: s.id}}} className="card-title h4 text-decoration-none text-dark">{s.title}</Link>
                        <p className="card-text">{s.new_price}</p>
                    </div>
                </div>
                })
            }

            </Carousel>
        </Row>
    );
}

export default BookSection;