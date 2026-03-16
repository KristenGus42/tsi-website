import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavBar({ active }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="./images/tsi-logo.jpg" alt="TSI Logo" />
          ExerciseRx
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/our-approach" className={active === "our-approach" ? "active" : undefined}>Our Approach</Nav.Link>
            <Nav.Link as={Link} to="/product" className={active === "product" ? "active" : undefined}>Product</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className={active === "about-us" ? "active" : undefined}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/publications" className={active === "publications" ? "active" : undefined}>Publications</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={active === "contact" ? "active" : undefined}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}