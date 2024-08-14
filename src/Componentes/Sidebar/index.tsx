import { Link } from "react-router-dom";
import { Home, Info, Briefcase, Phone, LogOut } from "react-feather";
import estilos from "./Sidebar.module.css";
import { Menu, Minimize } from "react-feather";
import { User } from "../../models/user";
import { useEffect, useState } from "react";

interface PropsBarraLateral {
  estaAbierto: boolean;
  alternarBarraLateral: () => void;
}

const Sidebar = ({ estaAbierto, alternarBarraLateral }: PropsBarraLateral) => {
  const [usuario, setUsuario] = useState<User>({
    nombre: "Edgar",
    apellido: "Matos",
    id: "1",
    contraseña: "",
    correo: "19matos96@gmail.com",
    rol: "",
  });

  // useEffect(() => {
  //   // Obtener el objeto usuario desde localStorage y parsearlo
  //   const storedUsuario = localStorage.getItem("usuario");
  //   if (storedUsuario) {
  //     setUsuario(JSON.parse(storedUsuario));
  //   }
  // }, []);
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

      <div className={estilos.cn_header}>
        <div className={estilos.logo}>
          {usuario && (
            <div className={estilos.avatar}>
              {usuario.nombre.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className={estaAbierto ? estilos.info_User : estilos.info_oculta}>
          <span>
            {usuario.nombre} {usuario.apellido}
          </span>
          <span className={estilos.correo}>{usuario.correo}</span>
        </div>
      </div>

      <div className={estilos.contenedor_body}>
        <div className={estilos.contenedor_enlaces}>
          <Link
            to="/"
            className={estilos.enlace}
            onClick={alternarBarraLateral}
          >
            <span className={estilos.icono}>
              <Home size={24} />
            </span>
            <span className={estilos.texto}>Inicio</span>
          </Link>

          <Link
            to="/about"
            className={estilos.enlace}
            onClick={alternarBarraLateral}
          >
            <span className={estilos.icono}>
              <Info size={24} />
            </span>
            <span className={estilos.texto}>Eventos</span>
          </Link>

          <Link
            to="/services"
            className={estilos.enlace}
            onClick={alternarBarraLateral}
          >
            <span className={estilos.icono}>
              <Briefcase size={24} />
            </span>
            <span className={estilos.texto}>Asistentes</span>
          </Link>
        </div>

        <div className={estilos.cerrar_Sesion}>
          <Link
            to="/contact"
            className={estilos.enlace}
            onClick={alternarBarraLateral}
          >
            <span className={estilos.icono}>
              <LogOut size={24} />
            </span>
            <span className={estilos.texto}>Salir</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
