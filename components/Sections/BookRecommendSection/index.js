import DetailCard from "@components/Cards/DetailCard";
import Title from "@components/Title";
import icons from 'bootstrap-icons/icons/arrow-right.svg';
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { DATA } from "@mock";
const remcommend = () => {
    const data = DATA.books;
    const detail_books = data.map(s=>{
        return <DetailCard key={s.id} img={s.photo} title={s.title} price={s.new_price}/>
    });

    return (
        <div>
            <div className={`d-inline-block`}>
                <h3>More by Sarah Rees Brennan
                    <button className={`btn btn-default`}>
                        <Image src={icons} alt="" width={30} />
                    </button>
                </h3>
            </div>
            <div>
                <Row>
                    <Col md={12}>
                        {detail_books}
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default remcommend;