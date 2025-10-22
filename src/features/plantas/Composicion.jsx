import { useOutletContext } from "react-router-dom";
function Composicion() {
    const { planta } = useOutletContext();
    return (
        <div className="mt-3">
            <div  className="contenido-html" dangerouslySetInnerHTML={{ __html: planta.activos }} />
        </div>
    );
}
export default Composicion;