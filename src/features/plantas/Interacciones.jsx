import { useOutletContext } from "react-router-dom";
function Interacciones() {
    const { planta } = useOutletContext();
    return (
        <div className="mt-3">
            <div  className="contenido-html" dangerouslySetInnerHTML={{ __html: planta.interacciones }} />
        </div>
    );
}
export default Interacciones;