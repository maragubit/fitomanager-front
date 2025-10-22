import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="mt-5"><p className="text-center d-inline">&copy; 2025 Fitomanager. All rights reserved. </p></div><div className="d-inline text-end justify-content-end"><p className="me-4">designed by: <a className="text-reset text-decoration-none" href="https://maragubit.es">maragubit</a></p></div>
            <div className="d-flex justify-content-center mb-1"><Link to="/politica-cookies"><p className="d-inline me-3">Politica de Cookies</p></Link><Link to="/politica-privacidad"><p className="d-inline me-3">Politica de Privacidad</p></Link><Link to="/aviso-legal"><p className="d-inline me-3">Aviso legal</p></Link></div>
            <div style={{height:"20px"}}></div>
        </footer>
    );
}
export default Footer