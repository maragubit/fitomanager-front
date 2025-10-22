import { Link, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './App.css';
import './assets/css/herboguia.css';
import Home from './pages/Home';
import Plantas from './pages/Plantas';
import Planta from './pages/Planta';
import Indicaciones from './features/plantas/indicaciones';
import Eficacia from './features/plantas/Eficacia';
import Posologia from './features/plantas/Posologia';
import Composicion from './features/plantas/Composicion';
import NotFound from './pages/NotFound';
import Accion from './features/plantas/Accion';
import Contraindicaciones from './features/plantas/Contraindicaciones';
import Interacciones from './features/plantas/Interacciones';
import Patologias from './pages/Patologias';
import Patologia from './pages/Patologia';
import Descripcion from './features/patologias/Descripcion';
import Etiologia from './features/patologias/Etiologia';
import Fitoterapia from './features/patologias/Fitoterapia';
import Productos from './pages/Productos';
import Producto from './pages/Producto';
import ComposicionProd from './features/productos/ComposicionProd';
import DescripcionProd from './features/productos/DescripcionProd';
import PosologiaProd from './features/productos/PosologiaProd';
import Blog from './pages/Blog';
import Post from './pages/Post';
import CookiesPolicy from './components/CookiesPolicy';
import usePageTracking from "./hooks/usePageTracking";
import CookieConsent from "react-cookie-consent";
import { AvisoLegal, PoliticaPrivacidad } from './components/LegalText';

function App() {
  usePageTracking();

  return (<>
      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        declineButtonText="Rechazar"
        enableDeclineButton
        cookieName="myAppCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#f1f1efff", fontSize: "13px", background: "#1a8010ff" }}
        declineButtonStyle={{ background: "#af1010", color: "white" }}
        expires={150}
      >
        Usamos cookies para mejorar tu experiencia.{" "}
        <Link to="/politica-cookies" style={{ color: "#59df47ff" }}>
          Más información
        </Link>
      </CookieConsent>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="plantas" element={<Plantas />} />
          <Route path="plantas/:id/" element={<Planta />}>
            <Route index element={<Indicaciones />} />
            <Route path="eficacia" element={<Eficacia />} />
            <Route path="posologia" element={<Posologia />} />
            <Route path="composicion" element={<Composicion />} />
            <Route path="accion" element={<Accion />} />
            <Route path="contraindicaciones" element={<Contraindicaciones />} />
            <Route path="interacciones" element={<Interacciones />} />
          </Route>
          <Route path="patologias" element={<Patologias />} />
          <Route path="patologias/patologia/:id" element={<Patologia />} >
            <Route index element={<Descripcion />} />
            <Route path="etiologia" element={<Etiologia />} />
            <Route path="fitoterapia" element={<Fitoterapia />} />
          </Route>
          <Route path="herbolario" element={<Productos />} />
          <Route path="herbolario/:id" element={<Producto />} >
            <Route index element={<DescripcionProd />} />
            <Route path="composicion" element={<ComposicionProd />} />
            <Route path="posologia" element={<PosologiaProd />} />
          </Route>
          <Route path="blog" index element={<Blog/>}/>
          <Route path="blog/entrada/:id" element={<Post/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="politica-cookies" element={<CookiesPolicy />} />
          <Route path="politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="aviso-legal" element={<AvisoLegal />} />
        </Route>
      </Routes>
  </>);
}

export default App;
