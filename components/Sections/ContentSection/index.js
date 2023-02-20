import { Col, Row } from 'react-bootstrap';
import style from './index.module.scss';
const content_section = () =>{
    return (
        <div className={`container bg-white ${style.container_content}`}>
            <Row>
                <Col md={6}>
                    page 1
                </Col>
                <Col md={6}>
                    page 2
                </Col>
            </Row>
        </div>
    )
}
export default content_section;