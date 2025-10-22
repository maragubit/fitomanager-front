import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getPlanta } from "../features/plantas/Apis";
import { Button, Col, Container, Row } from "react-bootstrap";
import Subnavegador from "../features/plantas/Subnavegador";
import PlantaCard from "../features/plantas/PlantaCard";
import Separador from "../components/Separador";
import { Icon } from "@iconify/react";

function Planta() {
    const { id } = useParams();
    const [planta, setPlanta] = useState(null);
    const [load, setLoad] = useState(true);
    
    useEffect(() => {
        const fetchPlanta = async () => {
            const response = await getPlanta(id);
            setPlanta(response.data);
            setLoad(false);
        };
        fetchPlanta();
    }, [id]);
    return (
        
        <div> 
        <PlantaCard planta={planta} load={load} />
        <Subnavegador /> 
        <Container>
            <Outlet context={{ planta }} />
        </Container>
        <Separador />
        <Container>
            <h5 className="text-center"> <img className="me-2" src="/logo.png" alt="logo" width="30" /><span>Productos fitomanager con {planta?.nombre} </span></h5>
            <p className="manuscrito">Próximamente...</p>
            <Row className="g-3 mt-5 mb-4">
                {planta?.productos?.filter(producto => producto.fitomanager===true).slice(0,3).map((producto) => (
                    <Col key={producto.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
                        <div className="text-center">
                            <img src={producto.imagen} alt={producto.nombre}  style={{ objectFit: "cover", height: "150px" }} />
                            <p className="mt-3">{producto.nombre}</p>
                            
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
        <Separador />
        <Container>
            <h5 className="text-center">Productos recomendados  con {planta?.nombre}</h5>
            <Row className="g-3 mt-5 mb-4">
                {planta?.productos?.filter(producto => producto.fitomanager===false).sort((a,b)=>b.media2-a.media2).slice(0,3).map((producto) => (
                    <Col key={producto.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
                        
                        <div className="text-center">
                            <Link to={`/herbolario/${producto.id}`}><img src={producto.foto} alt={producto.nombre}  style={{ objectFit: "cover", height: "150px" }} />
                            <p className="mt-3" style={{height:"50px",overflowY:"hidden"}}>{producto.nombre}</p></Link>
                             { producto.link && <><h3 className="d-inline text-center justify-content-center mx-auto">{(producto.pvp)}€</h3>
                    <Link to={producto.link}><Button  className=" comprar w-100 mb-3 mt-3"><Icon icon="typcn:shopping-cart" /> Comprar</Button></Link></>}

                            
                        </div>
                        
                    </Col>
                ))}
            </Row>
        </Container>
        </div>   
        
        
    );
}
export default Planta;
