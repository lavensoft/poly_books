import { Row } from "react-bootstrap";

function Title({text,iconAfter,color}) {
    return (
        <Row>
            <span className="h3 my-5" style={{color:color || "black"}}>{text}</span>
            {iconAfter || ''}
        </Row>
    );
}

export default Title;