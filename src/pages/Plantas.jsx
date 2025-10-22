import { useEffect, useState } from "react";
import { Card, Col, FormControl, Row } from "react-bootstrap";
import { getPlantas } from "../features/plantas/Apis";
import Cargando from "../components/Cargando";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

function Plantas() {
    const [plantas, setPlantas] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [next,setNext]=useState(null);
    const [previous,setPrevious]=useState(null);
    const [search,setSearch]=useState("");
    const [count,setCount]=useState(1);
    const pagesize=(count/12).toFixed(0);

    /* primera carga */
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response=await getPlantas(search);
                setPlantas(response.data.results);
                setCount(response.data.count);
                setNext(response.data.next);
                setPrevious(response.data.previous);
                setLoading(false);
                setError(null);
            }
            catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    },[search])

    const fetchPlantas=async(url,searchTerm)=>{
        try {
            const response=await getPlantas(searchTerm,url);
            setPlantas([...plantas,...response.data.results]);
            setNext(response.data.next);
            setPrevious(response.data.previous);
            setLoading(false);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    }
    return (<>
    <h1 className="text-center manuscrito m-3">Plantas Medicinales</h1>
    <p className="text-center mb-5 text-black">Descubre las propiedades y beneficios de nuestras plantas medicinales.</p>
    <FormControl style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar plantas..." />


        {loading ? <Cargando /> :
        <div>
        <InfiniteScroll
            dataLength={plantas.length}
            next={() => fetchPlantas(next, search)}
            hasMore={!!next}
            loader={<Cargando />}
        >
        <Row className="mt-3 g-2">
            {plantas.map((plant) => (
                <Col xs={6} lg={2} key={plant.id}>
                    <Link to={`/plantas/${plant.id}`}>
                        <Card>
                            <Card.Img style={{ objectFit: "cover", height: "150px" }} src={plant.imagen} alt={plant.nombre} />
                            <Card.Text className="text-center">{plant.nombre}</Card.Text>
                        </Card>
                    </Link>
                </Col>
        ))}
        </Row>
        </InfiniteScroll>
        </div>
        }
    

    </>);
}
export default Plantas;