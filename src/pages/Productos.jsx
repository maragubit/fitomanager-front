import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Separador from "../components/Separador";
import { useEffect, useState } from "react";
import { getProductos} from "../features/productos/Apis";
import InfiniteScroll from "react-infinite-scroll-component";
import Cargando from "../components/Cargando";
import PlantasProductos from "../features/productos/PlantasProductos";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Productos() {
    const [fitomanager, setFitomanager] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState(productos);
    const [next,setNext]=useState(null);
    const [plantaNombre,setPlantaNombre]=useState("");
    const [plantaId,setPlantaId]=useState(null);
    

/* cargar producto */
    useEffect(() => {
  const fetchData = async () => {
    try {
      let allResults = [];
      let nextUrl = null;

      // 1️⃣ Primera petición
      const response = await getProductos(searchTerm);
      allResults = response.data.results;
      nextUrl = response.data.next;

      // 2️⃣ Si hay plantaId → cargar todas las páginas
      if (plantaId) {
        while (nextUrl) {
          const nextResponse = await getProductos(searchTerm, nextUrl);
          allResults = [...allResults, ...nextResponse.data.results];
          nextUrl = nextResponse.data.next;
        }
      }

      // 3️⃣ Actualizar estado al final
      setProductos(allResults);
      setNext(nextUrl);
    } catch (error) {
      console.error("Error fetching productos:", error);
    }
  };

  fetchData();
}, [searchTerm, plantaId]);

    

    /* filtrar productos */
    useEffect(() => {
  const filtered = productos.filter((producto) => {
    const coincideFitomanager = producto.fitomanager === fitomanager;
    const coincidePlanta = !plantaId || producto.plantas.some((p) => p.id === plantaId);

    return coincideFitomanager && coincidePlanta;
  });

  setProductosFiltrados(filtered);
}, [fitomanager, productos, plantaId]);



     const fetchProductos=async(url,searchTerm)=>{
        try {
            const response=await getProductos(searchTerm,url);
            setProductos([...productos,...response.data.results]);
            setNext(response.data.next);
            
        } catch (err) {
            console.error("Error fetching productos:", err);
        }
    }

    return (
        <Container>
            <h2 className="text-center mt-4 mb-4 manuscrito">Herbolario</h2>
            <Row className="g-2 justify-content-center mx-auto">
                <Col className="w-50 text-end" xs={6}><button onClick={() => setFitomanager(true)} className="herbolario"><span style={{fontSize:'0.7em'}}>Catálogo fitomanager</span></button></Col>
                <Col className="text-start w-50" xs={6}><button onClick={() => setFitomanager(false)} className="herbolario"><span style={{fontSize:'0.7em'}}>Productos registrados</span></button></Col>
            </Row>
        <Separador/>
        <Form.Control type="search" placeholder="Buscar nombre de producto o indicación" className="mt-4 mb-4 justify-content-center mx-auto" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        { fitomanager ? <h5>Catálogo fitomanager</h5> : <h5>Productos recomendados con {plantaNombre}</h5>}
                <PlantasProductos setPlantaId={setPlantaId} plantaId={plantaId} setPlantaNombre={setPlantaNombre} />
        <InfiniteScroll
            dataLength={productosFiltrados.length}
            next={() => fetchProductos(next, searchTerm)}
            hasMore={!!next}
            loader={<Cargando />}
        >
        <Row className="g-3 mt-5 mb-4">
            {productosFiltrados?.map((producto) => (
                <Col key={producto.id} xs={6} sm={6} md={4} lg={3} className="mb-4">
                    <Card className="text-center border-0" style={{ height: '100%' }}>
                      <Link to={`/herbolario/${producto.id}`}>
                        <Card.Img variant="top" className="mx-auto" src={fitomanager ? producto.imagen : producto.foto} style={{height: "150px", width: "100px", objectFit: "cover"}} />
                        <Card.Body>
                            <Card.Text style={{ height: '50px', overflow: 'hidden' }}>{producto.nombre}</Card.Text>
                        </Card.Body>
                        </Link>
                        <Card.Footer className="border-0">
                             { !fitomanager && <><h3 className="d-inline text-center justify-content-center mx-auto">{(producto.pvp)}€</h3>
                                                <Link to={producto.link}><Button  className=" comprar w-100 mb-3 mt-3 z-2"><Icon icon="typcn:shopping-cart" /> Comprar</Button></Link></>}
                        </Card.Footer>
                    </Card>
                    
                </Col>
            ))}
        </Row>
        </InfiniteScroll>
        {fitomanager && <h5 className="text-center manuscrito">Próximamente ...</h5>}
        </Container>
    );
}
export default Productos;