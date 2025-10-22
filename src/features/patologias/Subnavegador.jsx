import { Col, Nav, Navbar, Row } from "react-bootstrap";

function Subnavegador({departamentos,setActiveIndex, activeIndex, departamentoId, setDepartamentoId}) {

    function handleSelect(index,id) {
        setActiveIndex(index);
        setDepartamentoId(id);
    }

     // Select "All" by default on initial render

    return (<>
    <Navbar className="mt-4 d-flex" bg="light">
        <Nav className="mx-auto">
            <Row className="g-2 text-center">
            {departamentos.map((departamento,index) => (
                <Col key={departamento.id} xs={4} md={3} lg="auto" className="mb-2">
                <Nav.Item>
                <Nav.Link key={departamento.id} active={departamento.id===departamentoId} onClick={() => handleSelect(index,departamento.id)} className="d-flex flex-column align-items-center justify-content-center">
                    <div className="mx-auto justify-content-center text-center"><img  src={departamento.logo} alt={departamento.name} style={{ width: "30px", height: "30px", objectFit: "cover", borderRadius: "50%" }} /></div>
                    <div className="mx-auto justify-content-center text-center">{departamento.name}</div>
                </Nav.Link>
                </Nav.Item>
                </Col>

            ))}
            </Row>
        </Nav>

    </Navbar>
  </>);
}
export default Subnavegador;