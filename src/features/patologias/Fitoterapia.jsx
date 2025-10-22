import { Icon } from "@iconify/react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
function Fitoterapia() {
    const patologia = useOutletContext();
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className={"contenido-html " + (open ? "open" : "close")} dangerouslySetInnerHTML={{ __html: patologia.fitoterapia }} />
            <div className="text-center">
                <p style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>{open ? <div><Icon icon="lucide:chevrons-up" /> mostrar menos</div> : <div><Icon icon="lucide:chevrons-down" /> mostrar más</div>}</p>
            </div>
        </div>
    );

}
export default Fitoterapia;