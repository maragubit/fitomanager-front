import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/images/product_01.jpg";
import slide2 from "../assets/images/product_02.jpg";
import slide3 from "../assets/images/product_03.webp";
import PlantasHome from "../features/home/PlantasHome";
import Separador from "../components/Separador";
import PatologiasHome from "../features/home/PatologiasHome";
import Promociones from "../features/home/Promociones";
import Logos from "../features/home/Logos";


function Home() {
  return (<>
  <section id="carousel">
     <Carousel className="carousel-home">
      <Carousel.Item interval={7000}>
        <img width="100%" className="carousel-image" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>Plantas medicinales</h3>
          <p style={{fontWeight: "bold"}}>Emplea nuestra guia de plantas medicinales</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={slide2} className="carousel-image" width="100%"  alt="Second slide" />
        <Carousel.Caption>
          <h3>Patologías</h3>
          <p style={{fontWeight: "bold"}}>Consulta los mejores tratamientos para sanar tus dolencias</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={slide3} className="carousel-image" width="100%" alt="Third slide" />
        <Carousel.Caption>
          <h3>Productos</h3>
           <p style={{fontWeight: "bold"}}>Descubre nuestra gama de productos naturales recomendados</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="descripcion-portada mt-4 mb-5">
    <h6>
      Si te apasiona lo natural y confías en el poder de las <em>plantas medicinales</em>, 
      si te pierdes entre la gran oferta de <em>productos naturales</em>, 
      o careces de la información necesaria para usarlos correctamente, <em>Fitomanager</em> es para ti.
      Orientamos sobre el uso adecuado de las plantas medicinales para mejorar tu bienestar y evaluamos productos naturales.
    </h6>
    </div>
    </section>
    <Separador />

    <section id="promociones">
      <Promociones />
    </section>
    
    <Separador />
    
    <section id="nuevas plantas">
      <PlantasHome />
    </section>

    <Separador />

    <section id="nuevas patologias">
      <PatologiasHome />
    </section>
    <Separador />
    <Logos />

    

  </>);
}
export default Home;