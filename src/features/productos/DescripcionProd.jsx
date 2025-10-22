import { useOutletContext } from "react-router-dom";
function DescripcionProd() {
    const { producto } = useOutletContext();
    return (
        <div>
            <h4>Descripción del Producto</h4>
            <p className="text-start">{producto?.descripcion}</p>
        </div>
    );
}
export default DescripcionProd;