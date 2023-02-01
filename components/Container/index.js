import { Container } from "react-bootstrap";
function CustomContainer({children}) {
    return ( 
        <Container fluid className="w-100 mx-0 px-0">
            {children}
        </Container>
     );
}

export default CustomContainer;