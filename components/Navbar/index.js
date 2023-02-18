import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "./styles.module.scss";

function CustomNavbar() {
    return (  
      <Navbar className={styles.navbar} bg="light" expand="lg">
        <Container fluid className={styles.container}>
          <Navbar.Brand style={{ flex: 1 }} href="/">LAVENES</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{ flex: 0 }}>
            <Nav
              className={styles.itemContainer}
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className={styles.item} href="#action1">TRANG CHỦ</Nav.Link>
              <Nav.Link className={styles.item} href="#action2">SÁCH</Nav.Link>
              <Nav.Link className={styles.item} href="#action2">GIỚI THIỆU</Nav.Link>
              <Nav.Link className={styles.item} href="#action2">LIÊN HỆ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default CustomNavbar;