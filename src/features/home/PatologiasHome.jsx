import { useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { getPatologiasHome } from "./Apis";
import Cargando from "../../components/Cargando";
import _ from "lodash";
import { Link } from "react-router-dom";


function PatologiasHome() {
    const [patologia, setPatologia] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPatologiasHome();
                setPatologia(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);
    return (
    <div>
      <h5 className="text-center mb-5 manuscrito">Última Patología añadida</h5>
      <Row className="g-3">

        {loading ? <Cargando/> : <>
      
        <Col lg={6} xs={12}>
        <Card className="patologia-home">
            <div>
            <Link to={`/patologias/patologia/${patologia.id}`}><Card.Img  variant="top" className="imgPatologia-main p-3" src={patologia.imagen} alt={patologia.nombre} />
            <div><Card.ImgOverlay className="d-flex justify-content-center mt-5">
            <div className="d-flex" style={{alignItems:'center'}}><h5 className="manuscrito text-black">{patologia.nombre}</h5></div>
            </Card.ImgOverlay></div></Link>
            
            <Card.Footer className="patologia-plant-footer p-4" style={{zIndex: 1}} >
                <Row className="g-3 align-items-stretch">
                <Carousel>
                {_.chunk(patologia.plantas, 4).map((chunk, index) => (
                    <Carousel.Item key={index}>
                        <Row className="g-3">
                            {chunk.map((planta) => (
                                <Col xs={6} lg={3} key={planta.id}>
                                    <Link to={`/plantas/${planta.id}`}>
                                        <Card className="patologia-plant-card boxShadow">
                                            <Card.Img className="main-patologia-plant-img mt-4" variant="bottom" src={planta.imagen} alt={planta.nombre} style={{ objectFit: 'cover', height: '100px' }} />
                                            <Card.Text className="text-center" ><p style={{ minHeight: '50px' }}>{planta.nombre}</p></Card.Text>
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                    
                    </Row>
                    </Carousel.Item>
                    
                ))}
                </Carousel></Row>
            </Card.Footer>

        </div>
        </Card>
        </Col>
        
        
        
        <Col xs={12} lg={6} className="text-center justify-content-center patologia-home">
        <Row>
            <Col lg={12}><h4 className="d-block text-center mb-4">Herbolario para {patologia.nombre}</h4></Col>
            </Row>
            <Row className="align-items-stretch g-3" style={{maxHeight: '750px', overflowY: 'auto'}}>
            {patologia.productos.map((producto) => (
           
                <Col xs={6} lg={4} key={producto.id} className="mb-4">
                    <Link to={`/herbolario/${producto.id}`}><Card className="boxShadow" style={{ height: '100%' }}>
                        <Card.Img className="mt-2" variant="top" src={producto.foto} alt={producto.nombre} style={{ objectFit: 'cover', height: '100px' }} />
                        <Card.Body>
                            <Card.Text style={{ height: '50px', overflow: 'hidden' }}>{producto.nombre}</Card.Text>
                        </Card.Body>
                    </Card></Link>
                </Col>
            ))}
            </Row>
        </Col>
        
        </>}

      </Row>
    </div>
    );
}
        
        
export default PatologiasHome;