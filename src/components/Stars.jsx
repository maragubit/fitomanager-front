import { Icon } from "@iconify/react";

function Stars({nota, width=20}) {
    const notas= new Array(nota).fill(0);
    const vacios= new Array(5-nota).fill(0);
    return(<div className="text-center">
        {notas.map((item,index)=>(
            <div className="d-inline" key={index}><Icon width={width}  color="#f1d014" icon="icon-park-twotone:star" /></div>
        ))}
        {vacios.map((item,index)=>(
            <div className="d-inline" key={index}><Icon width={width} icon="icon-park-twotone:star" style={{ opacity: 0.3 }} /></div>
        ))}
    </div>)
}
export default Stars;