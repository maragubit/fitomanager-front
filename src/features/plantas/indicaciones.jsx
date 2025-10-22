import { useOutletContext } from "react-router-dom";

function Indicaciones() {
  const { planta } = useOutletContext();
  return (
    <div className="mt-3">
      <h6>{planta?.usos}</h6>
    </div>
  );
}
export default Indicaciones;