import { Icon } from "@iconify/react";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Navegador() {
    const [expanded, setExpanded] = useState(false);
    return (
    <Navbar expand="lg"  expanded={expanded}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
        <img className="d-inline me-3" src="/logo.png" alt="Logo" width={50} />
          <h2 className="d-inline pt-4" style={{ color: "var(--primary-color)" }}>
            Fito<em style={{ color: "var(--secondary-color)" }}>Manager</em>
          </h2>
        </Navbar.Brand>
         <Navbar.Toggle aria-controls="main-navbar-nav" className="mt-4 mb-2">
              <span ><Icon icon={!expanded ? "famicons:menu" : "famicons:close"} onClick={() => setExpanded(expanded => !expanded)} /></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/plantas">Plantas medicinales</Nav.Link>
            <Nav.Link as={NavLink} to="/patologias">Fitoterapia</Nav.Link>
            <Nav.Link as={NavLink} to="/herbolario">Herbolario</Nav.Link>
            <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
            <Nav.Link href="/">acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navegador;