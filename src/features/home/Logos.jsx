
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Logos() {
    const images = ["/logo-drasanvi.png", "/solgar_logo.webp", "/soria_logo.png", "/biojoy_logo.jpg"];
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2, // Número de items visibles
            slidesToSlide: 1, // Avanza 1 item cada vez
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };
    return (<>
     <Carousel 
      responsive={responsive}
      infinite={true}      // Hace loop continuo
      autoPlay={true}      // Activa autoplay
      autoPlaySpeed={2500} // Cada 2.5 segundos
      keyBoardControl={false}
      transitionDuration={500} // Duración de la transición
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
      itemClass="carousel-item-padding-40-px"
    >
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`item-${index}`} style={{ height: "auto", width: "100%" }} />
        </div>
      ))}
    </Carousel>
    </>);
}
export default Logos;