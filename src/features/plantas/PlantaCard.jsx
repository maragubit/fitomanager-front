import { Col, Container, Row } from "react-bootstrap";
import Cargando from "../../components/Cargando";
import { Icon } from "@iconify/react";

function PlantaCard({ planta, load }) {
    return (
        <Container className="plant-container mt-3 p-1 ms-1 me-1">
            {load ? <Cargando /> : <Row>
                {/* Columna imagen planta */}
                <Col xs={12} md={6} className="mb-3">
                    <img src={planta?.imagen} alt={planta?.nombre} className="img-fluid planta-imagen rounded mx-auto d-block" style={{ maxHeight: "400px", objectFit: "cover" }} />
                </Col>
                {/* Columna ficha planta */}
                <Col xs={12} md={6} className="mb-3">
                    <div className="ficha p-3 rounded">
                        <h1 className="text-center manuscrito">{planta?.nombre}</h1>
                        <p className="especie text-center mx-auto justified-content-center mb-5">{planta?.especie}</p>
                        <p><strong>Parte empleada:</strong> {planta?.droga}</p>
                        <p><strong> Embarazo:</strong> {planta?.embarazo}</p>
                        <p><strong>Lactancia:</strong> {planta?.lactancia}</p>
                        <p><strong>Indicada a partir de:</strong> {planta?.edad} años</p>
                        <p className="mt-5" style={{ fontSize: "0.8em", color: "#999" ,fontStyle: "italic"}}>*BPM Bajo prescripción médica</p>
                        </div>
                </Col>


            </Row>}
        </Container>
    );
}
export default PlantaCard;