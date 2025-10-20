import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarMenu({ onLogout, userName }) {
  return (
    <>
    <Navbar bg="light" expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
              src="/jet4holidays_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          Jet4holidays
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/destinations">Destinations</Nav.Link>
            <Nav.Link as={Link} to="/flight-info">Flight Info</Nav.Link>
            <Nav.Link as={Link} to="/tickets">Tickets</Nav.Link>
            
          </Nav>

           <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="/" onClick={onLogout} className="logoutButton">{userName}</a>
            </Navbar.Text>
           </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  );
}
