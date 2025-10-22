import { useOutletContext } from "react-router-dom";
function Contraindicaciones() {
    const { planta } = useOutletContext();
    return (
        <div className="mt-3">
            <div  className="contenido-html" dangerouslySetInnerHTML={{ __html: planta.contraindicaciones }} />
        </div>
    );
}
export default Contraindicaciones;