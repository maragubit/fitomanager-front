import { useOutletContext } from "react-router-dom";
function PosologiaProd() {
    const { producto } = useOutletContext();
    return (
        <div>

<p className="text-start" dangerouslySetInnerHTML={{__html: producto.posologia}}></p>
        </div>
    );
}
export default PosologiaProd;