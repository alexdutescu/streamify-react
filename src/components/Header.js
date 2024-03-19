import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <Navbar expand="lg" className="sticky-top navbar-dark bg-dark">
          <Container>
            <Navbar.Brand href="/home">My Streamify Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className='nav-link' to="/home">Home</Link>
                <Link className='nav-link' to="/about">About</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}