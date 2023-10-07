import React from 'react';
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavBar = () => {
  return (
    <header>
        <nav>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar__primary bg-body-tertiary mb-3 Navbar__1">
          <Container fluid>
            <Navbar.Brand className='style__logo' href="/">Nico</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Nicolas Lemus
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="#action2">Sobre Mi</Nav.Link>
                <Nav.Link href="#action3">Proyectos</Nav.Link>
                <Nav.Link href="#action4">Certificados</Nav.Link>
                <Nav.Link href="#action5">Contacto</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </nav>
    </header>
  )
}

export default NavBar