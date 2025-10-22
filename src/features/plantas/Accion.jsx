import { useOutletContext } from "react-router-dom";
function Accion() {
    const { planta } = useOutletContext();
    return (
        <div className="mt-3">
            <div  className="contenido-html" dangerouslySetInnerHTML={{ __html: planta.mecanismo }} />
        </div>
    );
}
export default Accion;