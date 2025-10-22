import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
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
                <Link to={`/herbolario/${producto.id}`}>
                <Card>
                    <div>
                        <div className="descuento" style={{display:"none"}}>20% OFF </div>
                        <Card.Img className="mt-3" style={{ height: '150px', objectFit: 'cover', width: '100px' }} variant="top" src={producto.foto} alt="producto"/>
                    </div>
                    <Card.Body>
                        <Card.Text style={{ height: '50px', overflow: 'hidden' }}>{producto.nombre}</Card.Text>
                        <Card.Footer className="hidden">
                            <div className="d-flex justify-content-between"><h6 className="d-inline antes">{producto.pvp}€</h6> <h6 style={{display:"none"}} className="d-inline text-center justify-content-center mx-auto">{(producto.pvp - (producto.pvp * 0.2)).toFixed(2)}€</h6></div>
                        </Card.Footer>
                        <Button  className=" comprar w-100 hidden"><Icon icon="typcn:shopping-cart" /> Comprar</Button>
                    </Card.Body>
                </Card>
                </Link>
                </Col>
            ))}</Row>
        
    </Container>
  </>);
}
export default Promociones;