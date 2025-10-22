import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function ComposicionProd() {
  const { producto } = useOutletContext();

  return (
    <div className="composicion">  
      <Row className="mt-4 justify-content-start">
        {producto.plantas.map((planta) => (
            <Col key={planta.id} lg={3} xs={6}>
                <Link to={`/plantas/${planta.id}`}>
                <div style={{cursor:"pointer"}}>
                <img src={planta.imagen} alt={planta.nombre} style={{minWidth:"150px", height:"100px",objectFit:"cover"}}/>
                <p>{planta.nombre}</p>
                </div>
                </Link>
            </Col>
        ))}
    </Row>
    <p className="text-start mt-3" dangerouslySetInnerHTML={{__html: producto.composicion}} />
    </div>
  );
}
export default ComposicionProd;