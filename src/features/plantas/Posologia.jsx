import { useOutletContext } from "react-router-dom";
function Posologia() {
    const { planta } = useOutletContext();
    return (
        <div className="mt-3">
            <div  className="contenido-html" dangerouslySetInnerHTML={{ __html: planta.posologia }} />
        </div>
    );
}
export default Posologia;