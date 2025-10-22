import { Icon } from "@iconify/react";

function Cargando() {
    return (<>
        <div className=" d-flex justify-content-center mx-auto ">
            <div><Icon width={70} icon="line-md:loading-twotone-loop" /></div>
        </div>
        <p className="text-center mb-5">Cargando...</p>
    </>);
}
export default Cargando;