import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getProductosHome } from "./Apis";
import Cargando from "../../components/Cargando";
import { Link } from "react-router-dom";

function Promociones() {
    const [promociones, setPromociones] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProductosHome();
                setPromociones(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (<>
    <Container className="promo ps-3 pe-3">
      <h5 className="manuscrito text-center text-white mt-3">Productos nuevos del Herbolario</h5>
      <p className="mb-4 text-white">¡Aprovecha nuestras ofertas exclusivas!</p>
      
            <Row className="g-3">
                {loading ? <Cargando/> : promociones.map((producto, index) => (
                <Col xs={6} lg={3}>
                
                <Card>
                    <Link to={`/herbolario/${producto.id}`}><Card.Img className="mt-3" style={{ height: '150px', objectFit: 'cover', width: '100px' }} variant="top" src={producto.foto} alt="producto"/>
                    <Card.Body>
                        <Card.Text style={{ height: '50px', overflow: 'hidden' }}>{producto.nombre}</Card.Text>
                    </Card.Body>
                    </Link>
                             <Card.Footer>
                            <h4 className="d-inline text-center justify-content-center mx-auto">{(producto.pvp)}€</h4>
                            <Link to={producto.link}><Button  className=" comprar w-100 mb-3 mt-3"><Icon icon="typcn:shopping-cart" /> Comprar</Button></Link>
                        </Card.Footer>
                    
                </Card>
                
                </Col>
            ))}</Row>
        
    </Container>
  </>);
}
export default Promociones;