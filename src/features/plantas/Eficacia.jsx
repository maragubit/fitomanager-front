import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useOutletContext } from "react-router-dom";
import Stars from "../../components/Stars";

function Eficacia() {
    const { planta } = useOutletContext();
    return (
    <div className="mt-3">
        <Row className="g-2 align-items-stretch">
            {planta?.evidencias.map((evidencia)=> (
       
            <Col lg={4} className="text-center">
            <Link to={ `/patologias/patologia/${evidencia.indicacion.id}`}>
            <Card className="mb-3 boxShadow" key={evidencia.id}>
           <Card.Body>
             <Card.Text className="text-center">{evidencia.indicacion.nombre}</Card.Text>
             <Card.Img className="img-fluid mx-auto" variant="top" src={evidencia.indicacion.imagen} alt={evidencia.indicacion.nombre} style={{height: "200px", objectFit: "cover" }} />
             <Card.Footer>
                <Stars width={30} nota={evidencia.nota}/>
                <p>{evidencia.evidencia_text}</p>
            </Card.Footer>
           </Card.Body>
         </Card>
            </Link>
            
            </Col>
        
         
      ))}
    </Row>
    </div>
    );
}
export default Eficacia;