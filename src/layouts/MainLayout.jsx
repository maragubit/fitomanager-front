import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Navegador from "../components/Navegador";
import { Outlet } from "react-router"

function MainLayout() {
    return(<>

        <Navegador/>
        <Container className="main-layout-container">
        <Outlet/>
        </Container>
        <Footer/>
        
    </>);
}
export default MainLayout; 