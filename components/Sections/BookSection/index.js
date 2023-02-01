import { Carousel } from "@components";
import Title from "@components/Title";
import { config } from "@config";
import Link from "next/link";
import { Row } from "react-bootstrap";
import BookCard from "@components/Cards/BookCard";

function BookSection({ children }) {
    return (
        <Row>
            <Title text={"Top selling comics"} />
            <Carousel responsive={config.responsive.BookSection}>{children}</Carousel>
        </Row>
    );
}

export default BookSection;