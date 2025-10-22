import { useState,useEffect} from "react";
import { getPlantasTotal } from "../plantas/Apis";
import Cargando from "../../components/Cargando";
import { Form } from "react-bootstrap";

function PlantasProductos({ setPlantaId, plantaId, setPlantaNombre}) {
    const [plantas, setPlantas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPlantas, setFilteredPlantas] = useState([]);

    useEffect(() => {
        const fetchPlantas = async () => {
            try {
                const response = await getPlantasTotal();
                setPlantas(response.data);
                setFilteredPlantas(response.data);
                
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPlantas();
    }, []);
    useEffect(() => {
        const filtered = plantas.filter(planta => planta.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || planta.especie.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredPlantas(filtered);
    }, [searchTerm, plantas]);

    useEffect(() => {
        const planta = plantas.find(planta => planta.id === plantaId);
        if (planta) {
            setPlantaNombre(planta.nombre);
        }
    }, [plantaId, plantas]);

    if (loading) return <Cargando />;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <Form.Control style={{width:"80%",margin:"0 auto"}} placeholder="Buscar planta..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <div className="d-flex text-center mx-auto mt-4" style={{width:"100%",overflowX:"scroll",maxHeight:"300px"}}>
                {filteredPlantas.map((planta) => (
                    <div className="d-inline me-4" style={{whiteSpace:"nowrap", cursor:"pointer"}} key={planta.id} onClick={() =>plantaId === planta.id ? setPlantaId(null) : setPlantaId(planta.id)}><div className={plantaId===planta.id && "iluminada"}><img src={planta.imagen} alt={planta.nombre} style={{width:"50px",height:"50px",objectFit:"cover"}}/><p>{planta.nombre}</p></div></div>
                ))}
            </div>
        </div>
    );
}
export default PlantasProductos;