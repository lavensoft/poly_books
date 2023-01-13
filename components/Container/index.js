import { Container } from "react-bootstrap";

function CustomContainer({children}) {
    return ( 
        <Container>
            {children}
        </Container>
     );
}

export default CustomContainer;