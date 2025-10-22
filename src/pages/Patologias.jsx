import { use, useState } from "react";
import { useEffect } from "react";
import { getDepartamentos, getPatologias } from "../features/patologias/Apis";
import { Card, Col, FormControl, Row } from "react-bootstrap";
import Cargando from "../components/Cargando";
import { set } from "lodash";
import Subnavegador from "../features/patologias/Subnavegador";
import { Link } from "react-router-dom";

function Patologias() {
    const [patologias, setPatologias] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [activeIndex, setActiveIndex] = useState(null);
    const [filteredPatologias, setFilteredPatologias] = useState([]);
    const [departamentoId, setDepartamentoId] = useState(null);
    useEffect(() => {
        const fetchPatologias=async()=>{
            try {
                const response = await getPatologias(search);
                setPatologias(response.data); 
                setFilteredPatologias(response.data);
                setActiveIndex(null);
                const response2 = await getDepartamentos();
                setDepartamentos(response2.data);
                setLoading(false);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchPatologias();
    },[search]);
    useEffect(() => {
        if (departamentoId) {
            setFilteredPatologias(patologias.filter(p => p.categories?.some(c => c.id === departamentoId)));
        } else {
            setFilteredPatologias(patologias);
        }
    },[departamentoId]);

    return (<>
        <h1 className="text-center manuscrito m-3">Patologías</h1>
        <p className="text-center mb-5 text-black">consulta cómo puedes tratar las diferentes patologias de forma natural</p>
        <FormControl
            style={{ maxWidth: "600px", margin: "0 auto" }}
            type="text"
            placeholder="Buscar patologías..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <Subnavegador departamentos={departamentos} departamentoId={departamentoId} activeIndex={activeIndex} setActiveIndex={setActiveIndex} setDepartamentoId={setDepartamentoId} />
        <Row className="mt-4 g-2 text-center justify-content-center">
        {loading ? <Cargando /> : filteredPatologias?.map(p =>
             <Col key={p.id} xs={12} md={3}  className="mb-4">
             <Link to={`/patologias/patologia/${p.id}`}>
             <Card key={p.id}>
                <Card.Img variant="top" src={p.imagen} alt={p.nombre} style={{ objectFit: "cover", height: "200px" }} />
                <Card.Body className="patologia-home boxShadow">
                    <Card.Title className="text-center">{p.nombre}</Card.Title>
                </Card.Body>
             </Card>
            </Link>
             </Col>
            )}

        </Row>
    </>);
    
}
export default Patologias;