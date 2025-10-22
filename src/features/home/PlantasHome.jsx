import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { getPlantasHome } from "./Apis";
import Cargando from "../../components/Cargando";
import { Link } from "react-router-dom";


function PlantasHome() {
    
    const [plantas,setPlantas] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPlantasHome();
                setPlantas(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (err) {
               setError(err.message);
            }
        };
        fetchData();
    }, []);
    return(<>
    <h5 className="text-center mb-5 manuscrito">Nuevas Plantas añadidas</h5>
        
            {loading ? <Cargando/> : <Row>
            {plantas.map((planta) => (
                <Col key={planta.id} xs="12" lg="4">
                    <Link to={`/plantas/${planta.id}`}>
                        <Card className="mb-3 planta-card">
                            <Card.Img variant="top" src={planta.imagen} />
                            <Card.Body>
                                <Card.Title className="text-center">{planta.nombre}</Card.Title>

                            </Card.Body>
                        
                    </Card>
                    </Link>
                </Col>
            ))}
        </Row>}
    </>);
}
export default PlantasHome;
                    