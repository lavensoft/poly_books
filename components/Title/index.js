import { Row } from "react-bootstrap";

function Title({text,iconAfter,color, className}) {
    return (
        <Row>
            <span className={`h3 ${className}`} style={{color:color || "black"}}>{text}</span>
            {iconAfter || ''}
        </Row>
    );
}

export default Title;