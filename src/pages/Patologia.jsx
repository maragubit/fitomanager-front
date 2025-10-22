import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getPatologiaById } from "../features/patologias/Apis";
import Cargando from "../components/Cargando";
import { Col, Container, Nav, Row } from "react-bootstrap";
import NavTab from "../features/patologias/NavTab";
import Separador from "../components/Separador";
import Nota from "../components/Nota";
import Stars from "../components/Stars";

function Patologia() {
    const [patologia,setPatologia]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const {id}= useParams();
    useEffect(()=>{
        const fetchPatologia=async()=>{
            try{
                
                const response=await getPatologiaById(id);
                setLoading(false);
                setPatologia(response.data);
            }catch(err){
                setError(err.message);
            }
    }
    fetchPatologia()
},[id])
    return (<>{loading ? <Cargando/> :
        <div>
            <h3 className="text-center manuscrito mb-5">{patologia.nombre}</h3>
            <img src={patologia.imagen} alt={patologia.nombre} className="img-fluid mx-auto justify-content-center d-block mb-5" />
            <NavTab />
            <Outlet context={patologia}/>
            <Separador />
            <Container className="text-center mt-1">
                <h5 className="mt-5">Plantas empleadas en {patologia.nombre}</h5>
                <Row className="mt-4 g-4">
                    {patologia.plantas.map((planta) => (
                        <Col key={planta.id} xs={6} md={3} lg={2} className="mb-3">
                            <Link to={`/plantas/${planta.id}`} className="text-decoration-none text-dark d-flex flex-column align-items-center">
                            <img src={planta.imagen} alt={planta.nombre} style={{ objectFit: "cover", height: "100px", width: "100px" }} className="img-fluid" />
                            <h6 className="mt-4">{planta.nombre}</h6>
                            {(() => {
                            const evidencia = planta.evidencias?.find(e => e.indicacion.id === patologia.id);
                            if (evidencia) {
                                return <Stars nota={evidencia.nota} />;
                            }
                            return null;
                            })()}            

                            </Link>
                        </Col>
                    ))}

                </Row>

            </Container>
        </div>
    }</>);
}
export default Patologia;