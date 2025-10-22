import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useLocation } from "react-router-dom";


function NavTab() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navRef = useRef(currentPath);
  return (
    <Navbar className="mb-4">
        <Nav variant="tabs" defaultActiveKey={navRef.current}>
        <Nav.Item>
            <Nav.Link as={NavLink} to={navRef.current} end>Descripción</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={NavLink} to="etiologia">Etiología</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={NavLink} to="fitoterapia">Fitoterapia</Nav.Link>
        </Nav.Item>
        </Nav>
    </Navbar>
  );
}
export default NavTab;