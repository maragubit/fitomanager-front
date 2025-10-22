import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducto } from "../features/productos/Apis";
import Cargando from "../components/Cargando";
import { Button, Card, Col, Row} from "react-bootstrap";    
import { Icon } from "@iconify/react";
import Subnavegador from "../features/productos/subnavegador";

function Producto() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await getProducto(id);
                setProducto(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducto();
    }, [id]);

    if (loading) return <Cargando />;
    if (error) return <div>Error al cargar el producto</div>;

    return (
        
                <Card className="text-center border-0">
                    <Row className="justify-content-center"><Card.Text className="mt-5"><h2>{producto.nombre}</h2></Card.Text>
                    <Col lg={4} xs={12}>
                    <Card.Img variant="top" src={producto.foto} />
                    { producto.link && <><h3 className="d-inline text-center justify-content-center mx-auto">{(producto.pvp)}€</h3>
                    <Link to={producto.link}><Button  className=" comprar w-100 mb-3 mt-3"><Icon icon="typcn:shopping-cart" /> Comprar</Button></Link></>}

                    </Col>
                    </Row>
                    
                    <Subnavegador />
                    <Outlet context={{ producto }} />
                </Card>
        
    );
}

export default Producto;