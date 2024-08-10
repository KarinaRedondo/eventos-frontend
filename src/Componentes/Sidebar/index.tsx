import { Link } from "react-router-dom";
import { Home, Info, Briefcase, Phone } from "react-feather";
import estilos from "./Sidebar.module.css";
import { Menu, Minimize } from "react-feather";

interface PropsBarraLateral {
  estaAbierto: boolean;
  alternarBarraLateral: () => void;
}

const Sidebar = ({ estaAbierto, alternarBarraLateral }: PropsBarraLateral) => {
  return (
    <div
      className={`${estilos.barraLateral} ${
        estaAbierto ? estilos.barraLateralAbierta : estilos.barraLateralCerrada
      }`}
    >
      <div className={estilos.encabezadoBarraLateral}>
        <button onClick={alternarBarraLateral}>
          {estaAbierto ? <Minimize /> : <Menu />}
        </button>
      </div>

      <div className={estilos.contenedor_enlaces}>
        <Link to="/" className={estilos.enlace} onClick={alternarBarraLateral}>
          <span className={estilos.icono}>
            <Home size={24} />
          </span>
          <span className={estilos.texto}>Home</span>
        </Link>

        <Link
          to="/about"
          className={estilos.enlace}
          onClick={alternarBarraLateral}
        >
          <span className={estilos.icono}>
            <Info size={24} />
          </span>
          <span className={estilos.texto}>About</span>
        </Link>

        <Link
          to="/services"
          className={estilos.enlace}
          onClick={alternarBarraLateral}
        >
          <span className={estilos.icono}>
            <Briefcase size={24} />
          </span>
          <span className={estilos.texto}>Services</span>
        </Link>

        <Link
          to="/contact"
          className={estilos.enlace}
          onClick={alternarBarraLateral}
        >
          <span className={estilos.icono}>
            <Phone size={24} />
          </span>
          <span className={estilos.texto}>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
