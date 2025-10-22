import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useRef } from "react";

function Subnavegador() {
    const location = useLocation();
    const currentPath = location.pathname;
    const navRef = useRef(currentPath);
    
  return (
    <>
    
      <Navbar bg="light" className="w-100 rounded justify-content-center">

         <Nav className="d-flex w-100 text-center " variant="tabs" defaultActiveKey={navRef.current}  fill>
            <div className="d-flex flex-wrap d-inline w-100 g-1">
            <Nav.Item className="d-inline">
                <Nav.Link as={NavLink} to={navRef.current} end>Indicaciones</Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-inline">
                <Nav.Link as={NavLink} to="eficacia">Eficacia</Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-inline">
                <Nav.Link as={NavLink} to="posologia">Posología</Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-inline">
                <Nav.Link as={NavLink} to="composicion">Composición</Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-inline">
                <Nav.Link as={NavLink} to="accion">Acción</Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-inline">
                <Nav.Link as={NavLink} to="contraindicaciones">Contraindicaciones</Nav.Link>
            </Nav.Item>
            <Nav.Item className="d-inline">
                <Nav.Link as={NavLink} to="interacciones">Interacciones</Nav.Link>
            </Nav.Item>
            </div>
          </Nav>
        </Navbar>
        
        </>
    
  );
}
export default Subnavegador;