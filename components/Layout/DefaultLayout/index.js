import { Container, Footer, Navbar } from "@components";

const default_layout = ({ children }) => {
    return (
        <Container>
            <Navbar />
            {children}
            <Footer />
        </Container>
    )
}
export default default_layout;