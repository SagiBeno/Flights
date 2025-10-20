import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarMenu({ onLogout }) {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand>TravelAir</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/destinations">Destinations</Nav.Link>
          <Nav.Link as={Link} to="/flight-info">Flight Info</Nav.Link>
          <Nav.Link as={Link} to="/tickets">Tickets</Nav.Link>
          <Nav.Link onClick={onLogout}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
